import LeftSideBar from "../components/LeftSideBar";

export default function RootLayout({ children }) {
  return (
    <div className=" relative flex flex-col h-screen w-full bg-[#F0F2FF] overflow-hidden">
      <main className="relative h-screen w-full flex bg-black-3 m-[10px]  ">
        <LeftSideBar />
        <div className="flex flex-col">{children}</div>
      </main>
    </div>
  );
}
