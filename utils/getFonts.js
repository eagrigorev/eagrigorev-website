import { Jost, Roboto, Roboto_Condensed, Spectral } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'], // Light, Regular, Medium, Bold
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const roboto_condensed = Roboto_Condensed({
  weight: ['300', '400', '500', '700'], // Light, Regular, Medium, Bold
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-condensed',
});

export const jost = Jost({
  weight: ['300', '400', '500'], // Light, Regular, Medium
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
