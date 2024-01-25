import { Cormorant, Roboto_Slab } from 'next/font/google';

export const cormorant = Cormorant({
  weight: ['600'], // SemiBold
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
});

export const roboto_slab = Roboto_Slab({
  weight: ['200', '300'], // ExtraLight, Light
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-slab',
});
