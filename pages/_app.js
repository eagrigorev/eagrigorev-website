import { Analytics } from '@vercel/analytics/react';
import Header from '@/templates/parts/header';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  );
}
