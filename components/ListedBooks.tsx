"use client";
import { BooksContext } from "@/Context/BooksContext";
import { useContext, useState } from "react";

const ListedBooks = () => {
  const booksContext = useContext(BooksContext);
  if (!booksContext) {
    throw new Error("Error from Listed Books");
  }
  const { readBooks, wishList } = booksContext;
  const [activeTab, setActiveTab] = useState("read");

  return (
    <div>
      <div className="flex gap-5">
        <button className="border" onClick={() => setActiveTab("read")}>Read List</button>
        <button className="border" onClick={() => setActiveTab("wish")}>Wish List</button>
      </div>
      <div></div>

      {activeTab === "read" &&
        readBooks.map((book) => (
          <div key={book.bookId}>
            <h2>{book.bookName}</h2>
          </div>
        ))}
      {activeTab === "wish" &&
        wishList.map((wish) => (
          <div key={wish.bookId}>
            <h2>Wish: {wish.about}</h2>
          </div>
        ))}
    </div>
  );
};

export default ListedBooks;
