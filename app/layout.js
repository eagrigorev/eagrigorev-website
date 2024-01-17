import '@/global.css'

export const metadata = {
  title: 'Evgenii Grigorev',
  description: 'Artist & Software Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
