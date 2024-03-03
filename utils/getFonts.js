import { Roboto, Roboto_Condensed } from 'next/font/google';

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
