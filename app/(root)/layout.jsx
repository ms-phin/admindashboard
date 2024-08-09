import LeftSideBar from "../components/LeftSideBar";
import { auth } from "@/app/auth";

export default async function RootLayout({ children }) {
  const response = await auth();
  const user = response?.user || null;
  console.log(user);
  // console.log("Fetched User in RootLayout:", user);

  return (
    <div className=" relative flex flex-col h-[calc(100vh-20px)] w-full bg-[#F0F2FF] overflow-hidden">
      <main className="relative h-screen w-full flex bg-black-3 m-[10px]  ">
        <LeftSideBar user={user} />
        <section className="flex min-h-screen flex-1  flex-col px-4">
          <div className="mx-auto flex h-[calc(100vh-20px)] w-full max-w-5xl flex-col">
            <div className="flex flex-col">{children}</div>
          </div>
        </section>
      </main>
    </div>
  );
}
