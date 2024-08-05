import LogoIcon from "../../components/LogoIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import LogoLoginIcon from "../../components/LogoLoginIncon";
import Link from "next/link";

export default function SignUp() {
  return (
    <main className="h-screen w-full">
      <div className="grid lg:grid-cols-4 h-full overflow-hidden">
        {/* {Right} */}

        <div className="col-span-4 lg:col-span-2 overflow-y-auto bg-white">
          <div className="text-[#000000] h-full w-full flex items-center justify-center">
            <div className="my-4 w-full space-y-3 max-w-[730px] gap-[20px] mx-auto p-6">
              <div className="flex gap-4">
                <LogoLoginIcon />
                <h1 className="text-3xl font-semibold">Book Rent</h1>
              </div>
              <h5 className="text-2xl font-normal leading-8 text-left pt-[10px] pb-[10px]">
                Singup as Owner
              </h5>

              <form>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </Label>
                <Input
                  className="mt-2 mb-2 bg-transparent block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="email"
                  id="email"
                  placeholder="Email"
                />
                <Label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <Input
                  className="mt-2 mb-2 bg-transparent block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="password"
                  id="password"
                  placeholder="Password"
                />
                <Label
                  htmlFor="confirm_password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </Label>
                <Input
                  className="mt-2 mb-2 bg-transparent block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                />
                <Label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </Label>
                <Input
                  className="mt-2 mb-2 bg-transparent block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="text"
                  id="location"
                  placeholder="Location"
                />
                <Label
                  htmlFor="phone_number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </Label>
                <Input
                  className="mt-2 mb-2 bg-transparent block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="tel"
                  id="phone_number"
                  placeholder="Phone Number"
                />
                <div className="flex items-center space-x-2 pt-2 pb-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full mt-5 bg-[#00ABFF] text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  signup
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
