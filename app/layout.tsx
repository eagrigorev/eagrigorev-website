import './utopia.css';
import './normalize.css';
import './fonts.css';
import Footer from './components/footer';
import Header from './components/header';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="u-container">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
