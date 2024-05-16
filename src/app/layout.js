import '@/style/main.scss';
import { Analytics } from '@vercel/analytics/react';
import { spectral, jost } from '@/utils/getFonts';
import TheHeader from '@/components/TheHeader/TheHeader';

export const metadata = {
  title: 'Evgenii Grigorev',
  description: 'Artist & Software Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spectral.variable} ${jost.variable}`}>
      <body>
        <TheHeader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
