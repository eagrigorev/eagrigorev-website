/* Global */
import { Jost, Spectral } from 'next/font/google';

export const jost = Jost({
  weight: ['300', '400', '600'], // Light, Regular, SemiBold
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
