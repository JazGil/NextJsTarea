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
        {children}
      </body>
    </html>
  );
}