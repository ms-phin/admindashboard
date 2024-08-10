"use client";
// import { auth } from "@/app/auth";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Input } from "@/components/ui/input";
import { useState } from "react";
import UploadImage from "../../../components/UploadImage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define your form schema using zod
const formSchema = z.object({
  MusicTitle: z.string().min(1, "Music title is required"),
  // Add other fields as needed
});

const Book = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [showModal, setShowModal] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      MusicTitle: "",
    },
  });

  // Define a submit handler.
  const onSubmit = (values) => {
    // Do something with the form values.
    console.log(values);
  };

  return (
    <section className="relative flex flex-col">
      <div className="bg-white rounded-[20px] p-3">
        <h1 className="text-20 font-semibold ml-[49px]">Owner/Book Upload</h1>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-12 flex w-full flex-col bg-white"
        >
          <div className="flex flex-col gap-[30px] border-b border-black-5 pd-10">
            <FormField
              control={form.control}
              name="Upload New Books"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2.5">
                  <div className="mt-10 w-full flex justify-center">
                    <FormLabel className="text-16 font-bold ">
                      Upload new Book
                    </FormLabel>
                  </div>
                  <div className="mt-10 w-full flex justify-center">
                    <div className="w-[150px] bg-white rounded-[20px]">
                      <Button
                        onClick={() => setShowModal(true)}
                        className="text-16 w-full py-4 font-extrabold text-black transition-all duration-500 hover:bg-white"
                      >
                        Add Book
                      </Button>
                    </div>
                  </div>
                  <FormMessage className="text-white" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex  w-[500px] mx-auto">
            <div className="mt-10 flex-1">
              <div className="h-full bg-white rounded-[20px] flex items-center justify-center">
                <Select>
                  <SelectTrigger className="w-full border-none bg-gray-200">
                    <SelectValue placeholder="Category " />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Fantasy</SelectItem>
                    <SelectItem value="dark">Dystopian</SelectItem>
                    <SelectItem value="system">Romance</SelectItem>
                    <SelectItem value="system">Horro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-10 flex-1">
              <div className="h-full flex flex-col">
                <Input
                  className="mt-[2px] mb-[2px] bg-transparent text-gray-400 bg-gray-200 block w-full border-gray-300 rounded-[20px] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-full"
                  type="text"
                  id="book"
                  name="price"
                  placeholder=" Rent Price for weeks"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col pt-10">
            <UploadImage setImageUrl={setImageUrl} />
            <div className="mt-10 w-full">
              <Button
                type="submit"
                className="text-16 w-full bg-orange-1 py-4 font-extrabold text-white-1 transition-all duration-500 hover:bg-black-"
              >
                {isSubmitting ? (
                  <>
                    Submitting
                    {/* <Loader size={20} className="animate-spin ml-2" /> */}
                  </>
                ) : (
                  "Submit & Publish Music"
                )}
              </Button>
            </div>
          </div>
        </form>
      </Form>

      {showModal ? (
        <div className="absolute top-0 right-0 mt-6 mr-6 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2 bg-white">
          <h4 className="top-6 bottom-3 font-normal text-[18px] leading-[24px]">
            Add Book
          </h4>
          <form className="gap-5">
            <Label
              htmlFor="book"
              className="block text-xs font-medium text-gray-700"
            >
              Book Name
            </Label>
            <Input
              className="mt-[2px] mb-[2px] bg-transparent bg-gray-200 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              type="text"
              id="book"
              name="book_name"
              placeholder="Book Name"
            />
            <Label
              htmlFor="authore"
              className="block text-xs font-medium text-gray-700"
            >
              Author Name
            </Label>
            <Input
              className="mt-[2px] mb-[2px] bg-transparent bg-gray-200 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              type="text"
              id="authore"
              name="authore_name"
              placeholder="Author Name"
            />
            <Label
              htmlFor="authore"
              className="block text-xs font-medium text-gray-700"
            >
              Catgory
            </Label>
            <Select>
              <SelectTrigger className="w-full border-none bg-gray-200">
                <SelectValue placeholder="Category " />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Fantasy</SelectItem>
                <SelectItem value="dark">Dystopian</SelectItem>
                <SelectItem value="system">Romance</SelectItem>
                <SelectItem value="system">Horro</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center justify-center space-x-3">
              <Button
                type="submit"
                className="w-1/2  bg-[#00ABFF] text-white py-2 px-4  hover:bg-blue-700 rounded-[20px]"
              >
                Add
              </Button>
              <Button
                className="my-5 w-auto px-8 h-10 bg-blue-600 text-white shadow hover:shadow-lg font-semibold rounded-[20px]"
                onClick={() => setShowModal(false)}
              >
                Close
              </Button>
            </div>
          </form>
        </div>
      ) : null}
    </section>
  );
};

export default Book;
