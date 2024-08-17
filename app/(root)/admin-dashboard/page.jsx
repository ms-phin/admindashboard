import { auth } from "@/app/auth";
import Image from "next/image";
// import styles from "./transactions.module.css";

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
        <div className="flex flex-col w-full h-full bg-white rounded-[14px]">
          <div className="bg-white p-5 rounded-lg">
            <h2 className="mb-5 font-extralight ">Latest Transactions</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Status</td>
                  <td>Date</td>
                  <td>Amount</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex gap-2.5 items-center">
                      <Image
                        src="/noavatar.png"
                        alt=""
                        width={40}
                        height={40}
                        className="object-cover rounded-full"
                      />
                      John Doe
                    </div>
                  </td>
                  <td>
                    <span className="rounded-md p-1.25 text-sm text-white bg-[#f7cb7375]">
                      Pending
                    </span>
                  </td>
                  <td>14.02.2024</td>
                  <td>$3,200</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex gap-2.5 items-center">
                      <Image
                        src="/noavatar.png"
                        alt=""
                        width={40}
                        height={40}
                        className="object-cover rounded-full"
                      />
                      John Doe
                    </div>
                  </td>
                  <td>
                    <span className="rounded-md p-1.25 text-sm text-white bg-[#afd6ee75]">
                      Done
                    </span>
                  </td>
                  <td>14.02.2024</td>
                  <td>$3,200</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex gap-2.5 items-center">
                      <Image
                        src="/noavatar.png"
                        alt=""
                        width={40}
                        height={40}
                        className="object-cover rounded-full"
                      />
                      John Doe
                    </div>
                  </td>
                  <td>
                    <span className="rounded-md p-1.25 text-sm text-white bg-[#f7737375]">
                      Cancelled
                    </span>
                  </td>
                  <td>14.02.2024</td>
                  <td>$3,200</td>
                </tr>
                <tr>
                  <td>
                    <div className="flex gap-2.5 items-center">
                      <Image
                        src="/noavatar.png"
                        alt=""
                        width={40}
                        height={40}
                        className="object-cover rounded-full"
                      />
                      John Doe
                    </div>
                  </td>
                  <td>
                    <span className="rounded-md p-1.25 text-sm text-white bg-[#f7cb7375]">
                      Pending
                    </span>
                  </td>
                  <td>14.02.2024</td>
                  <td>$3,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdminDashboard;
