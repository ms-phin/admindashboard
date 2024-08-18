"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

const User = ({ isAdmin }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setUser(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
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
  useEffect(() => {
    getUsers();
  }, []);

  console.log(user);
  return (
    <section className="relative h-[300px] w-[808px] flex flex-col overflow-scroll ">
      <div className="flex  gap-4">
        <div className="flex flex-col w-full h-full  rounded-[14px]">
          <div className="bg-white p-5 rounded-lg">
            <h2 className=" font-bold text-gray-800">List of Owners</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-gray-400 font-medium text-sm">
                  <th className="px-2  text-left">No.</th>
                  <th className="px-2  text-left">Book No.</th>
                  <th className="px-2  text-left">Owner</th>
                  <th className="px-2  text-left">Status</th>
                  <th className="px-2  text-left">Price</th>
                </tr>
              </thead>
              <tbody className="h-[250px] w-[332px]">
                {data.map((book, index) => (
                  <tr key={book._id} className="border-b  border-gray-200 ">
                    <td className="px-4 py-0 text-left font-inter text-[16px] font-light leading-[19.36px]">
                      {index + 1}
                    </td>
                    <td className="px-4 py-0 text-left font-inter text-[16px] font-light leading-[19.36px]">
                      {book._id}
                    </td>
                    <td className="px-4 py-0 text-left font-inter text-[16px] font-light leading-[19.36px]">
                      {user.find((u) => u._id === book.user)?.email || "N/A"}
                    </td>
                    <td className="px-4 py-0 text-left font-inter text-[16px] font-light leading-[19.36px]">
                      {book.isActive ? "Active" : "Inactive"}
                    </td>
                    <td className="px-4 py-0 text-left font-inter text-[16px] font-light leading-[19.36px]">
                      {book.price}
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
