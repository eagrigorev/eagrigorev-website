import { Analytics } from '@vercel/analytics/react';
import './global.css';

import Header from './components/Header/Header';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="container">
        <Header />
        <main className="content">{children}</main>
        {/* <Footer /> */}
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
