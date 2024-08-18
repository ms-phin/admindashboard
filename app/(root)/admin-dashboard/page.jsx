import { auth } from "@/app/auth";
import Image from "next/image";
// import styles from "./transactions.module.css";
import UserProperty from "../../components/UserProperty";

const AdminDashboard = async () => {
  const { user } = await auth();
  // console.log("let us check i am sidebar or not", user);
  const isAdmin = user?.isAdmin;

  return (
    <section className="relative flex flex-col">
      <div className="bg-white rounded-[20px] p-3">
        <h1 className="text-20 font-semibold ml-[49px]">
          {isAdmin ? "Admin/DashBoard" : "Owner/DashBoard"}
        </h1>
      </div>
      <div className=" flex  h-[calc(100vh-35px)] mt-[15px] gap-4">
        <div className="flex flex-col w-full max-w-[318px] h-full bg-white rounded-[14px] ">
          {" "}
          left part
        </div>
        <div className="flex flex-col w-full h-full  rounded-[14px]">
          <UserProperty />
          <div className="h-[260px] bg-white">
            <h3>Below the Table</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdminDashboard;
