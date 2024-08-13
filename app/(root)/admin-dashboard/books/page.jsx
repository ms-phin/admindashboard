"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

/* CSS to move the Swal popup to the right */

const Book = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(false);

  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    category: "",
    quantity: "",
    price: "",
  });

  // Handler for submitting the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("title", bookDetails.title);
    formData.append("author", bookDetails.author);
    formData.append("category", bookDetails.category);
    formData.append("quantity", bookDetails.quantity);
    formData.append("price", bookDetails.price);
    // Append the image to the FormData object
    if (image) {
      formData.append("image", image);
    }
    const respones = await axios.post("/api/book", formData);

    if (respones.data.success) {
      setIsSubmitted(true);
      setBookDetails({
        title: "",
        author: "",
        category: "",
        quantity: "",
        price: "",
      });
      setImage(null);

      toast.success(respones.data.msg);
    } else {
      toast.error("Error");
    }
    // console.log("Submitting:", formData);

    // Add your submission logic here

    setIsSubmitting(false);
  };

  // Handler for book details input
  const handleBookDetailsChange = (event) => {
    const { name, value } = event.target;
    setBookDetails((bookDetails) => ({
      ...bookDetails,
      [name]: value,
    }));
    console.log("Book Details:", bookDetails);
  };

  // Handler for file input
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  // Handler for closing modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Handler for adding book (modal action)
  const handleAddBook = (e) => {
    e.preventDefault();

    handleCloseModal();
  };

  return (
    <section className="relative flex flex-col overflow-scroll scroll-m-0">
      <div className="sticky top-0 bg-white rounded-[20px] p-3">
        <h1 className="text-20 font-semibold ml-[49px]">Owner/Book Upload</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-12 flex w-full h-[calc(100vh-150px)] flex-col bg-white"
      >
        <div className="flex flex-col gap-[30px] border-b border-black-5 pd-10">
          <div className="flex flex-col gap-2.5 mt-10 w-full justify-center">
            <label className="text-16 flex w-full justify-center font-bold">
              Upload new Book
            </label>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="mt-10 w-[140px] ml-[420px] text-center bg-white text-16 py-4 font-extrabold text-[#00ABFF] px-4 hover:bg-blue-700 hover:text-white rounded-[20px] transition-all duration-500"
            >
              Add Book
            </button>
          </div>
        </div>
        <div className="flex w-[500px] h-12 mx-auto gap-3">
          <div className="mt-10 p-0 flex-1 h-full bg-white flex items-center justify-center rounded-[30px] border-[2.2px]">
            <div className="relative">
              <select
                type="number"
                name="quantity"
                onChange={handleBookDetailsChange}
                value={bookDetails.quantity}
                className="w-full border-none bg-transparent focus:ring-0 outline-none text-gray-400"
              >
                <option value="">quantity</option>
                <option value="1">one</option>
                <option value="2">two</option>
                <option value="3">three</option>
                <option value="4">four</option>
              </select>
            </div>
          </div>
          <div className="mt-10 h-full flex-1 border-[2.2px] rounded-[20px]">
            <input
              name="price"
              onChange={handleBookDetailsChange}
              value={bookDetails.price}
              className="mt-[2px] p-4 mb-[2px] bg-transparent text-gray-400 block w-full border-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-full"
              type="number"
              placeholder="Rent Price for weeks"
            />
          </div>
        </div>
        <div className="flex flex-col pt-10">
          <label htmlFor="image">
            <div className="flex items-center justify-center">
              <div className="image_div">
                <div className="flex gap-4">
                  <Image
                    src="/icons/upload.png"
                    alt="upload"
                    width={19}
                    height={10}
                  />
                  <div className="flex text-[#00ABFF] text-base font-medium leading-6 text-left">
                    Uploading Book Cover
                  </div>
                </div>
              </div>
            </div>
          </label>
          <input
            onChange={handleImageChange}
            type="file"
            id="image"
            className="hidden"
          />
          {image && (
            <div className="flex-center w-full">
              <Image
                src={URL.createObjectURL(image)}
                width={200}
                height={70}
                className="mt-5"
                alt="bookcover"
              />
            </div>
          )}
          <div className="mt-4 w-full flex justify-center">
            <button
              type="submit"
              className="text-16 w-fit px-[117px] bg-[#00ABFF] py-4 font-extrabold text-white hover:bg-blue-700 hover:text-white transition-all duration-500 rounded-[30px]"
            >
              {isSubmitting ? "Submitting" : "Submit"}
            </button>
          </div>
        </div>
      </form>
      {showModal && (
        <div className="absolute top-0 right-0 mt-6 mr-6 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2 bg-white">
          <h4 className="top-6 bottom-3 font-normal text-[18px] leading-[24px]">
            Add Book
          </h4>
          <form className="gap-5">
            <label
              htmlFor="book"
              className="block text-xs font-medium text-gray-700"
            >
              Book Name
            </label>
            <input
              onChange={handleBookDetailsChange}
              value={bookDetails.title || ""}
              className="mt-[2px] mb-[2px] p-2 border-none  focus:ring-0 outline-none bg-gray-200 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              type="text"
              name="title"
              placeholder="Book Name"
            />
            <label
              htmlFor="author"
              className="block text-xs font-medium text-gray-700"
            >
              Author Name
            </label>
            <input
              onChange={handleBookDetailsChange}
              value={bookDetails.author}
              className="mt-[2px] p-2 border-none focus:ring-0 outline-none mb-[2px]  bg-gray-200 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              type="text"
              name="author"
              placeholder="Author Name"
            />
            <label
              htmlFor="category"
              className="block text-xs font-medium text-gray-700"
            >
              Category
            </label>
            <div className="relative">
              <select
                name="category"
                onChange={handleBookDetailsChange}
                value={bookDetails.category}
                className="w-full border-none bg-transparent focus:ring-0 outline-none text-gray-400"
              >
                <option value="">Select Category</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Dystopian">Dystopian</option>
                <option value="Romance">Romance</option>
                <option value="Horror">Horror</option>
              </select>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <button
                type="button"
                className="w-auto bg-[#00ABFF] text-white py-2 px-8 hover:bg-blue-700 rounded-[20px]"
                onClick={handleAddBook}
              >
                Add
              </button>
              <button
                className="my-5 w-auto px-7 h-10 bg-blue-600 text-white hover:bg-red-600 hover:text-white shadow hover:shadow-lg font-semibold rounded-[20px]"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
      {isSubmitted &&
        Swal.fire({
          title: "Congrats!",
          text: "Your have uploaded the book successfully. Waite until we approved it.",
          imageUrl: "/icons/smile.png",
          imageWidth: 134,
          imageHeight: 150,
          imageAlt: "Custom image",
          customClass: {
            popup: "swal2-right",
            title: "swal2-title-custom",
            content: "swal2-content-custom",
          },
        }).then(() => {
          // Reset isSubmitted to false when the alert is closed
          setIsSubmitted(false);
        })}
    </section>
  );
};

export default Book;
