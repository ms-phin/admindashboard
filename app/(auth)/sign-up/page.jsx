import LogoIcon from "../../components/LogoIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import LogoLoginIcon from "../../components/LogoLoginIncon";
import Link from "next/link";
import { fetchUsers } from "@/app/api/data";
import { addUser } from "@/app/api/actions";

export default async function SignUp() {
  const users = await fetchUsers();

  return (
    <main className="h-screen w-full">
      <div className="grid lg:grid-cols-4 h-full overflow-hidden">
        {/* {Right} */}

        <div className="col-span-4 lg:col-span-2 overflow-y-auto bg-white p-16 scroll-m-0">
          <div className="text-[#000000] h-full w-full flex items-center justify-center">
            <div className=" w-full  max-w-[730px] gap-[20px] mx-auto ">
              <div className="flex gap-4">
                <LogoLoginIcon />
                <h1 className="text-2xl font-semibold">Book Rent</h1>
              </div>
              <h5 className="text-base font-normal leading-8 text-left pt-[5px] pb-[5px]">
                Singup as Owner
              </h5>

              <form action={addUser}>
                <Label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-700"
                >
                  Email
                </Label>
                <Input
                  className="mt-[2px] mb-[2px] bg-transparent block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <Label
                  htmlFor="password"
                  className="block text-xs font-medium text-gray-700"
                >
                  Password
                </Label>
                <Input
                  className="mt-[2px] mb-[2px] bg-transparent block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <Label
                  htmlFor="confirm_password"
                  className="block text-xs font-medium text-gray-700"
                >
                  Confirm Password
                </Label>
                <Input
                  className="mt-[2px] mb-[2px] bg-transparent block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="Confirm Password"
                />
                <Label
                  htmlFor="location"
                  className="block text-xs font-medium text-gray-700"
                >
                  Location
                </Label>
                <Input
                  className="mt-[2px] mb-[2px] bg-transparent block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Location"
                />
                <Label
                  htmlFor="phone_number"
                  className="block text-xs font-medium text-gray-700"
                >
                  Phone Number
                </Label>
                <Input
                  className="mt-[2px] mb-[2px] bg-transparent block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="tel"
                  id="phone_number"
                  name="phone"
                  placeholder="Phone Number"
                />
                <div className="flex items-center space-x-2 pt-2 pb-2">
                  <Checkbox id="terms" name="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full mt-2 bg-[#00ABFF] text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Signup
                </Button>
              </form>

              <p className="flex items-center justify-center text-center">
                Already have an account?{" "}
                <Link href="/sign-in">
                  <p className="text-[#00ABFF] font-family:Roboto font-size:16px font-weight:400 line-height:24px text-align:center ml-2">
                    Login
                  </p>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex col-span-4 lg:col-span-2 border-r-2 lg:border-gray-700 lg:-order-1 overflow-auto bg-[#171B36] items-center justify-center">
          <div className="relative w-[378px] h-[209px]">
            <div className="flex w-full h-full">
              <LogoIcon color="white" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
