import Image from "next/image";
import imgGithub from "@/assets/logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <Image src={imgGithub} alt="GitHub" width={200} height={200} />
      <h1 className="text-3xl font-bold">Mis repos de GitHub</h1>
      <Link href="/repos" className="text-blue-500">
        Ver repositorios{" "}
      </Link>
    </main>
  );
}