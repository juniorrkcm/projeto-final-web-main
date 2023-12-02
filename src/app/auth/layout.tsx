export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="flex justify-center items-center min-h-screen"
      style={{ background: "linear-gradient(120deg, #ffffff, #000000)" }}
    >
      {children}
    </main>
  );
}
