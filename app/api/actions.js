"use server";

import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
  const { email, password, confirm_password, location, phone, isAdmin } =
    Object.fromEntries(formData);

  // Check if password and confirm_password match
  if (password !== confirm_password) {
    throw new Error("Passwords do not match");
  }

  // Ensure password and other fields are not empty
  if (!email || !password || !confirm_password || !location || !phone) {
    throw new Error("All fields are required");
  }

  try {
    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
      phone,
      location,
      isAdmin: isAdmin || false, // Default isAdmin to false if not provided
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      throw new Error("Username or email already exists");
    } else {
      throw new Error("Failed to create user!");
    }
  }

  revalidatePath("/admin-dashboard/");
  redirect("/admin-dashboard/");
};

export const authenticate = async (formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
