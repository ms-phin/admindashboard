import { connectToDB } from "../utils";
import { Book } from "../models";
import { User } from "../models";
import { NextResponse } from "next/server";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

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
    // console.log("Books retrieved:", books);

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

// export async function POST(request) {
//   try {
//     await connectToDB();

//     const form = formidable();

//     const parseForm = () => {
//       return new Promise((resolve, reject) => {
//         form.parse(request, (err, fields, files) => {
//           if (err) reject(err);
//           resolve({ fields, files });
//         });
//       });
//     };

//     const { fields } = await parseForm();

//     const { email, title, author, category, quantity, price, imageUrl } =
//       fields;

//     if (!email || !title || !author || !category || !quantity || !price) {
//       return NextResponse.json(
//         {
//           success: false,
//           msg: "Missing required fields",
//         },
//         { status: 400 }
//       );
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return NextResponse.json(
//         {
//           success: false,
//           msg: "User not found",
//         },
//         { status: 404 }
//       );
//     }

//     const newBook = await Book.create({
//       title,
//       author,
//       category,
//       quantity,
//       price,
//       imageUrl,
//       user: user._id,
//     });

//     user.books.push(newBook._id);
//     await user.save();

//     return NextResponse.json({
//       success: true,
//       msg: "Book Added",
//       book: newBook,
//     });
//   } catch (error) {
//     console.error("Error saving book:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         msg: "Failed to add book",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }

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

    const bookData = {
      title: formData.get("title"),
      author: formData.get("author"),
      category: formData.get("category"),
      quantity: parseInt(formData.get("quantity"), 10),
      price: parseFloat(formData.get("price")),
      imageUrl: formData.get("image"),
      user: user._id,
    };

    // Save the book data to the database
    const newBook = await Book.create(bookData);
    // console.log("BOOK SAVED", newBook);
    // Ensure the user.books is an array
    if (!Array.isArray(user.books)) {
      user.books = [];
    }
    console.log(newBook._id);
    user.book.push(newBook._id);
    await user.save();
    // Return a success response
    return NextResponse.json({ success: true, msg: "Book Added" });
  } catch (error) {
    console.error("Error saving book:", error);
    return NextResponse.json({
      success: false,
      msg: "Failed to add book",
      error,
    });
  }
}

export async function PUT(request, response) {
  try {
    const { _id, isActive } = await request.json();
    await connectToDB();
    await Book.updateOne({ _id }, { isActive });
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
