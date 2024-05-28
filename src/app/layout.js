import '@/style/main.scss';
import { Analytics } from '@vercel/analytics/react';
import { spectral, jost } from '@/scripts/getFonts';
import TopNavigation from '@/components/TopNavigation/TopNavigation';
import CopyrightNotice from '@/components/CopyrightNotice/CopyrightNotice';

export const metadata = {
  title: 'Evgenii Grigorev',
  description: 'Artist & Software Developer',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${spectral.variable} ${jost.variable}`}>
      <body>
        <TopNavigation />
        {children}
        <CopyrightNotice />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
