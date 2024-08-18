"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

const User = ({ isAdmin }) => {
  const [data, setData] = useState([]);

  const updateUserStatus = async (_id, newStatus) => {
    try {
      const response = await axios.put("/api/book", {
        _id,
        isActive: newStatus,
      });
      if (response.data.success) {
        // Update the local state
        setData((prevData) =>
          prevData.map((book) =>
            book._id === _id ? { ...book, isActive: newStatus } : book
          )
        );
      } else {
        console.error("Error updating user:", response.data.msg);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const getBooks = async () => {
    try {
      const response = await axios.get("/api/book");
      setData(response.data.books);
      console.log("what the fuckk is happenign", data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);
  console.log(data.price);
  return (
    <section className="relative h-[calc(100vh-35px)] flex flex-col ">
      <div className="sticky top-0 bg-white rounded-[20px] p-3">
        <h1 className="text-20 text-gray-800 font-semibold ml-[49px]">
          Owner/Book Data
        </h1>
      </div>

      <div className="flex h-[calc(100vh-105px)] mt-[15px] gap-4">
        <div className="flex flex-col w-full h-full overflow-scroll  bg-white rounded-[14px]">
          <div
            className="  w-full right-0 justify-end"
            style={{
              display: "flex",
              width: "72vw",
              gap: "1rem",
              marginBottom: "1.3rem",
              marginTop: "1rem",
            }}
          >
            <Image
              src="/icons/search.png"
              alt="upload"
              width={13}
              height={13}
            />
            <Image src="/icons/sort.png" alt="upload" width={13} height={13} />
            <Image src="/icons/Union.png" alt="upload" width={13} height={13} />
            <Image src="/icons/brbs.png" alt="upload" width={13} height={13} />
            <Image
              src="/icons/linebr.png"
              alt="upload"
              width={13}
              height={13}
            />
          </div>
          <div className="bg-white p-5 rounded-lg">
            <h2 className="mb-5 font-bold text-gray-800">List of Owners</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-gray-400 font-medium text-sm">
                  <th className="px-4 py-2 text-left">No.</th>
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2 text-left">Author</th>
                  <th className="px-4 py-2 text-left">Category</th>
                  <th className="px-4 py-2 text-left">Quantity</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((book, index) => (
                  <tr key={book.email} className="border-b border-gray-200">
                    <td className="px-4 py-2 text-gray-400">{index + 1}</td>
                    <td className="px-4 py-2 text-gray-800">{book.title}</td>
                    <td className="px-4 py-2 text-gray-800">{book.author}</td>
                    <td className="px-4 py-2 text-gray-400">{book.category}</td>
                    <td className="px-4 py-2 text-gray-400">{book.quantity}</td>
                    <td className="px-4 py-2">
                      <label
                        htmlFor={`check-${index}`}
                        className={` cursor-pointer relative w-12 h-3 rounded-full inline-block
                          ${book.isActive ? "bg-green-400" : "bg-gray-300"}`}
                      >
                        <input
                          type="checkbox"
                          id={`check-${index}`}
                          className="sr-only peer"
                          checked={book.isActive}
                          onChange={() =>
                            updateUserStatus(book._id, !book.isActive)
                          }
                        />
                        <span className="w-5 h-5 bg-gray-400 absolute rounded-full top-[-3px] peer-checked:bg-green-600 peer-checked:left-8 transition-all duration-500"></span>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
