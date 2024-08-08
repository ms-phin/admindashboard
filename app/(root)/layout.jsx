// import { useEffect } from "react";
// import { fetchUsers } from "../api/data";
import LeftSideBar from "../components/LeftSideBar";

export default function RootLayout({ children }) {
  return (
    <div className=" relative flex flex-col h-[calc(100vh-20px)] w-full bg-[#F0F2FF] overflow-hidden">
      <main className="relative h-screen w-full flex bg-black-3 m-[10px]  ">
        <LeftSideBar />
        {/* <div className="flex flex-col">{children}</div> */}
        <section className="flex min-h-screen flex-1  flex-col px-4">
          <div className="mx-auto flex h-[calc(100vh-20px)] w-full max-w-5xl flex-col">
            <div className="flex flex-col">{children}</div>
          </div>
        </section>
      </main>
    </div>
  );
}
