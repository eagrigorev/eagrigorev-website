import './global.scss';
import { roboto, roboto_condensed } from '@/style/fonts';

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
      <body>{children}</body>
    </html>
  );
}
