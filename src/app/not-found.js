import Link from "next/link";
export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Page not found please return home</h1>
      <br />
      <Link href={"/"}>Home</Link>
    </main>
  );
}
