"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import Model from "./Model";

const User = ({ isAdmin }) => {
  const [data, setData] = useState([]);
  const [openModelDelete, setOpenModelDelete] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const getUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setData(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const updateUserStatus = async (email, newStatus) => {
    try {
      const response = await axios.put("/api/users", {
        email,
        isActive: newStatus,
      });
      if (response.data.success) {
        // Update the local state
        setData((prevData) =>
          prevData.map((user) =>
            user.email === email ? { ...user, isActive: newStatus } : user
          )
        );
      } else {
        console.error("Error updating user:", response.data.msg);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      const response = await axios.delete(`/api/users`, { params: { id } });
      if (response.data.success) {
        setData((prevData) => prevData.filter((user) => user._id !== id));
        setOpenModelDelete(false);
      } else {
        console.error("Error deleting user:", response.data.msg);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  console.log("why the fuck is not working ", selectedUserId);

  return (
    <section className="relative flex flex-col overflow-scroll">
      <div className="sticky top-0 bg-white rounded-[20px] p-3">
        <h1 className="text-20 text-gray-800 font-semibold ml-[49px]">
          Owner/Book Upload
        </h1>
      </div>
      <div className="flex h-[calc(100vh-35px)] mt-[15px] gap-4">
        <div className="flex flex-col w-full h-full bg-white rounded-[14px]">
          <div className="bg-white p-5 rounded-lg">
            <h2 className="mb-5 font-bold text-gray-800">List of Owners</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-gray-400 font-medium text-sm">
                  <th className="px-4 py-2 text-left">No.</th>
                  <th className="px-4 py-2 text-left">Owner</th>
                  <th className="px-4 py-2 text-left">Upload</th>
                  <th className="px-4 py-2 text-left">Location</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <tr key={user.email} className="border-b border-gray-200">
                    <td className="px-4 py-2 text-gray-400">{index + 1}</td>
                    <td className="px-4 py-2 text-gray-800">{user.email}</td>
                    <td className="px-4 py-2 text-gray-400">
                      {user.book ? user.book.length : 0}
                    </td>
                    <td className="px-4 py-2 text-gray-400">{user.location}</td>
                    <td className="px-4 py-2">
                      <label
                        htmlFor={`check-${index}`}
                        className={` cursor-pointer relative w-12 h-3 rounded-full inline-block
                          ${user.isActive ? "bg-green-400" : "bg-gray-300"}`}
                      >
                        <input
                          type="checkbox"
                          id={`check-${index}`}
                          className="sr-only peer"
                          checked={user.isActive}
                          onChange={() =>
                            updateUserStatus(user.email, !user.isActive)
                          }
                        />
                        <span className="w-5 h-5 bg-gray-400 absolute rounded-full top-[-3px] peer-checked:bg-green-600 peer-checked:left-8 transition-all duration-500"></span>
                      </label>
                    </td>
                    {isAdmin && (
                      <td className="flex ml-3 mt-3 gap-5">
                        <IoEyeSharp className="" width={20} />
                        <FaTrash
                          className="text-red-600 cursor-pointer"
                          width={20}
                          onClick={() => {
                            setOpenModelDelete(true);
                            setSelectedUserId(user._id); // This line ensures the correct user ID is set.
                          }}
                        />
                        <Model
                          modelOpen={openModelDelete}
                          setModelOpen={setOpenModelDelete}
                        >
                          <h3 className="text-lg justify-center">
                            Are you sure, you want to delete this task?
                          </h3>
                          <div className="text-16 w-fit   font-extrabold text-white  hover:text-white transition-all duration-500 rounded-[30px]">
                            <button
                              onClick={() => handleDeleteTask(selectedUserId)}
                              className="btn text-white bg-[#00ABFF] hover:bg-blue-700"
                            >
                              Yes
                            </button>
                          </div>
                        </Model>
                      </td>
                    )}
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
