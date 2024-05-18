import '@/style/main.scss';
import { Analytics } from '@vercel/analytics/react';
import { spectral, jost } from '@/scripts/getFonts';
import TopNavigation from '@/components/TopNavigation/TopNavigation';

export const metadata = {
  title: 'Evgenii Grigorev',
  description: 'Artist & Software Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spectral.variable} ${jost.variable}`}>
      <body>
        <TopNavigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
