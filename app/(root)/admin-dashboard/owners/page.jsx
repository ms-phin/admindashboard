import { auth } from "@/app/auth";

import Owners from "../../../components/Owners";

const page = async () => {
  const authResult = await auth();
  const user = authResult?.user || null;
  const isAdmin = user?.isAdmin;
  // console.log(isAdmin);
  const hasUser = !!user;

  return (
    <div className="h-full  w-full">
      <Owners hasUser={hasUser} />
    </div>
  );
};
export default page;
