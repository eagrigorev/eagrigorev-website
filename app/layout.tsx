'use client';

import './fonts.css';
import Theme from './components/theme';
import Footer from './components/footer';
import Header from './components/header';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="u-container">
        <Theme />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
