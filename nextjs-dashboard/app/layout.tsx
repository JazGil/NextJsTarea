import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <h1>Titulo</h1>
        <div style={{ border: '1px solid #000', padding: '10px' }}>
          
        </div>
        {children}
      </body>
    </html>
  );
}