import { connectToDB } from "../utils";
import { Book } from "../models";
import { User } from "../models";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";


export async function GET(request) {
  try {
    await connectToDB();
    const email = request.nextUrl.searchParams.get("email");
    console.log("Email received:", email);

    let books;

    if (email) {
      books = await Book.find({ email });
    } else {
      books = await Book.find({});
    }

    // Debugging: Log the books retrieved
    console.log("Books retrieved:", books);

    // Check if the books array is empty or undefined
    if (!books || books.length === 0) {
      console.log("No books found for the given email or in the collection.");
      return NextResponse.json(
        {
          success: false,
          msg: "No books found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, books });
  } catch (error) {
    console.error("Error fetching books:", error);
    return NextResponse.json(
      {
        success: false,
        msg: "Failed to fetch books",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    // Connect to the database
    await connectToDB();
    console.log("Connected to the database");

    const formData = await request.formData();
    const email = formData.get("email");
    const user = await User.findOne({ email });
    console.log(user);
    console.log("user", user._id);

    const image = formData.get("image");
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
    // Retrieve and prepare book data
    const bookData = {
      title: formData.get("title"),
      author: formData.get("author"),
      category: formData.get("category"),
      quantity: parseInt(formData.get("quantity"), 10),
      price: parseFloat(formData.get("price")),
      imageUrl: imgUrl,
      user: user._id,
    };

    // Save the book data to the database
    const newBook = await Book.create(bookData);
    console.log("BOOK SAVED", newBook);
    // Ensure the user.books is an array
    if (!Array.isArray(user.books)) {
      user.books = [];
    }
    console.log(newBook._id);
    user.book.push(newBook._id);
    await user.save();
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





// export async function GET(request) {
//   try {
//     await connectToDB();
//     console.log("Connected to the database");
//     const books = await Book.find({});
//     return NextResponse.json({ books });
//   } catch (error) {
//     console.error("Error fetching books:", error);
//     return NextResponse.json({
//       success: false,
//       msg: "Failed to fetch books",
//       error,
//     });
//   }
// }
