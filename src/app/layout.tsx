/* Global */
import React from 'react';
import { Metadata } from 'next';

/* Components */
import HeaderNavigation from '@/components/HeaderNavigation/HeaderNavigation';

/* Scripts */
import { jost, spectral } from '@/scripts/getFonts';

/* Style */
import '@/style/main.scss';

/* Utils */
import { websiteMetadata } from '@/utils/const/websiteMetadata';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = websiteMetadata;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${jost.variable} ${spectral.variable}`}>
      <body>
        <HeaderNavigation />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
