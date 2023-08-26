import { Analytics } from '@vercel/analytics/react';
import './style/global.css';
import Header from './components/header';
import Footer from './components/footer';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="container">
        <Header />
        <main className="content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
