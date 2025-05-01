"use client";

import { useEffect, useState } from "react";
import BookCard from "../components/book-card"; // Ensure this path is correct

interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  publishedDate: string;
  ISBN: string;
}

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books"); // update your API route
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        console.log("Books data:", data);
        setBooks(data.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();

    return () => {
      console.log("BooksPage unmounted");
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl text-black font-bold text-center mb-8">Book Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}