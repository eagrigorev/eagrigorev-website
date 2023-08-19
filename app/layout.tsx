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
      </body>
    </html>
  );
};

export default RootLayout;
