import './global.scss';

import { cormorant, roboto_slab } from '@/style/fonts';
import Header from '@/components/header';

export const metadata = {
  title: 'Evgenii Grigorev',
  description: 'Artist & Software Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${roboto_slab.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
