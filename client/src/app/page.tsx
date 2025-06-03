import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="text-4xl font-bold text-center mt-10">
          Welcome to Sona
        </h1>
        <p className="text-center mt-4">
          Map Your Music with Sona
        </p>
        <div className="flex justify-center mt-8">
          <Image
            src="/images/sona-logo.png"
            alt="Sona Logo"
            width={200}
            height={200}
          />
        </div>
      </div>
    </main>
  );
}
