import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={'${montserrat.className} antialiased'}>
        Esto es parte del layoult
        <footer className='py-10 flex justify-center item center'>
          Hecho con 💖 by Jaz
        </footer>
        {children}
      </body>
    </html>
  );
}