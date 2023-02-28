import { Analytics } from '@vercel/analytics/react';
import Header from '@/templates/parts/header';
import '@/styles/app.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="app-container u-container">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </div>
  );
}
