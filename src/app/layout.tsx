/* Namespaces */
import React from 'react';

/* Components */
import HeaderNavigation from '@/components/navigation/HeaderNavigation/HeaderNavigation';
import CopyrightNotice from '@/components/navigation/CopyrightNotice/CopyrightNotice';

/* Utils */
import '@/style/main.scss';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { spectral, jost } from '@/scripts/getFonts';

export const metadata: Metadata = {
  title: {
    default: 'Evgenii Grigorev',
    template: '%s • Evgenii Grigorev',
  },
  description: 'Artist & Software Developer',
  generator: 'Next.js',
  applicationName: 'eagrigorev-website',
  keywords: [
    'Pixel Art',
    'Fingerstyle Tabs',
    'Boreal Heights',
    'Illustrations',
  ],
  authors: [{ name: 'Evgenii Grigorev', url: 'https://eagrigorev.com' }],
  creator: 'Evgenii Grigorev',
  publisher: 'Vercel',
  metadataBase: new URL('https://eagrigorev.com'),
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${spectral.variable} ${jost.variable}`}>
      <body>
        <HeaderNavigation />
        {children}
        <CopyrightNotice />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
