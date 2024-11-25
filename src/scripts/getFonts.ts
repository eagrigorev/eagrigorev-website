import { Jost, Spectral } from 'next/font/google';

export const jost = Jost({
  weight: ['400'], // Regular
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
});

export const spectral = Spectral({
  weight: ['300'], // Light
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-spectral',
});
