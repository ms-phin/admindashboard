import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
  try {
    await connectToDB(); // Await the connection
    const users = await User.find();
    return users;
  } catch (err) {
    console.log("Failed to fetch users:", err);
    throw new Error("Failed to fetch users");
  }
};
