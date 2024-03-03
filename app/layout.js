import './style.scss';
import { roboto, roboto_condensed } from '@/utils/getFonts';
import Header from '@/components/header/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Evgenii Grigorev',
  description: 'Artist & Software Developer',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${roboto_condensed.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
