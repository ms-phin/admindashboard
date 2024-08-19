import AddBook from "../../../components/addbook/BookAdd";
import { auth } from "@/app/auth";

const page = async () => {
  try {
    const { user } = await auth();
    const email = user?.email;
    const isAdmin = user?.isAdmin;

    return (
      <section className=" h-full w-full">
        <AddBook email={email} isAdmin={isAdmin} />
      </section>
    );
  } catch (err) {
    console.error("Failed to authenticate:", err);
    return (
      <section className=" h-full w-full flex justify-center items-center">
        <h1 className="text-red-500">An error occurred</h1>
      </section>
    );
  }
};

export default page;
