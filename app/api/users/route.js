// /pages/api/user.js or /app/api/user/route.js
import { connectToDB } from "../utils"; // Adjust the path according to your project structure
import { User } from "../models"; // Adjust the path according to your project structure
import { NextResponse } from "next/server";

export async function GET(request, response) {
  try {
    await connectToDB();
    const users = await User.find({});
    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({
      success: false,
      msg: "Failed to fetch users",
      error,
    });
  }
}

// Updating user status
export async function PUT(request, response) {
  try {
    const { email, isActive } = await request.json();
    await connectToDB();
    await User.updateOne({ email }, { isActive });
    return NextResponse.json({ success: true, msg: "User status updated" });
  } catch (error) {
    console.error("Error updating user status:", error);
    return NextResponse.json({
      success: false,
      msg: "Failed to update user status",
      error,
    });
  }
}

// Deleting a user
export async function DELETE(request) {
  try {
    // const { searchParams } = newURL(request.url);
    const id = request.nextUrl.searchParams.get("id");
    // const id = searchParams.get("id");
    console.log("idofid ", id);

    if (!id) {
      return NextResponse.json({
        success: false,
        msg: "No user ID provided",
      });
    }
    await connectToDB();

    const result = await User.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return NextResponse.json({
        success: false,
        msg: "No user found to delete",
      });
    }

    return NextResponse.json({ success: true, msg: "User deleted" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json({
      success: false,
      msg: "Failed to delete user",
      error,
    });
  }
}
