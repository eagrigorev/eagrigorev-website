/* Global */
import React from 'react';
import { Metadata } from 'next';

/* Components */
import RootLayoutFooter from '@/components/RootLayoutFooter/RootLayoutFooter';
import RootLayoutHeader from '@/components/RootLayoutHeader/RootLayoutHeader';

/* Scripts */
import { jost, spectral } from '@/scripts/getFonts';

/* Style */
import '@/style/main.scss';

/* Utils */
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { websiteMetadata } from '@/utils/const/websiteMetadata';

export const metadata: Metadata = websiteMetadata;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${jost.variable} ${spectral.variable}`}>
      <body>
        <RootLayoutHeader />
        {children}
        <RootLayoutFooter />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
