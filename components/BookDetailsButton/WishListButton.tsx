"use client"
import { BooksContext } from "@/Context/BooksContext";
import { BookType } from "@/types/bookType";
import { useContext } from "react";

interface BookDetailsProps {
  book: BookType | undefined;
}

const WishListButton = ({ book }: BookDetailsProps) => {
  const bookContext = useContext(BooksContext);
  if (!bookContext) {
    throw new Error("Error from Wish List Button");
  }
  const { wishList, setWishList } = bookContext;
  const handleWishList = () => {
    if (!book) return;
    const alreadyExists = wishList.some((item) => item.bookId === book.bookId);
    if (alreadyExists) return;

    setWishList([...wishList, book]);
  };
  return <button onClick={handleWishList}>WishListButton</button>;
};

export default WishListButton;
