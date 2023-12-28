import Header from '@/components/header';

export const metadata = {
  title: 'Evgenii Grigorev',
  description: 'Software developer & artist',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
