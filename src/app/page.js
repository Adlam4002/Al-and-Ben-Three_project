import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="flex flex-row">
        <Link href={"/alex"}>Alex&apos;s Canvas</Link>
        <Link href={"/ben"}>Ben&apos;s Canvas</Link>
      </div>
    </main>
  );
}
