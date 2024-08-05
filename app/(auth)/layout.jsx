export default function RootLayout({ children }) {
  return (
    <main className="relative h-screen w-full">
      <div>{children}</div>
    </main>
  );
}
