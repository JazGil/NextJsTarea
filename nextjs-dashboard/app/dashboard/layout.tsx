export default function Layout(
  { children }: { children: React.ReactNode }
) {
  return (
    <section>
      Esto es el layout del dash
      {children}
    </section>
  );
}