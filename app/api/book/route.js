import { connectToDB } from "../utils";
import { Book } from "../models";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
export const config = {
  api: {
    bodyParser: true, // Enable or disable body parsing
  },
};

export async function GET(request) {
  try {
    await connectToDB();
    console.log("Connected to the database");
    const books = await Book.find({});
    return NextResponse.json({ books });
  } catch (error) {
    console.error("Error fetching books:", error);
    return NextResponse.json({
      success: false,
      msg: "Failed to fetch books",
      error,
    });
  }
}

export async function POST(request) {
  try {
    // Connect to the database
    await connectToDB();
    console.log("Connected to the database");

    const formData = await request.formData();
    // console.log("Received form data:", formData);

    // const title = formData.get("title");
    // console.log(title);
    const image = formData.get("image");
    // console.log(image);
    if (!image) {
      console.error("No image found in form data");
      return NextResponse.json({ success: false, msg: "No image selected" });
    }
    const timestamp = Date.now();
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;

    // Retrieve and prepare book data
    const bookData = {
      title: formData.get("title"),
      author: formData.get("author"),
      category: formData.get("category"),
      quantity: formData.get("quantity"),
      price: formData.get("price"),
      imageUrl: imgUrl, // Use the imgUrl generated above
    };

    // Save the book data to the database
    await Book.create(bookData);
    console.log("BOOK SAVED");

    // Return a success response
    return NextResponse.json({ success: true, msg: "Book Added", imgUrl });
  } catch (error) {
    console.error("Error saving book:", error);
    return NextResponse.json({
      success: false,
      msg: "Failed to add book",
      error,
    });
  }
}
