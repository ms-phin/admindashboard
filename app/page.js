import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full ">
      <div className="grid h-full w-full grid-cols-1 md:grid-cols-2 max-[1240px] mx-auto">
        <div className="h-full bg-slate-700 text-red-500">Bebilo</div>
        <div className="h-full ">mesfin</div>
      </div>
    </main>
  );
}
