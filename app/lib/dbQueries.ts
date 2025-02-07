import prisma from "./prisma";
import { GoogleBookVolume, Book } from "@/types/book";

export function createBook(book: GoogleBookVolume): Book {
  const authors = book.volumeInfo.authors;
  const price = book.saleInfo.listPrice;
  const img = book.volumeInfo.imageLinks;

  return {
    id: book.id,
    title: book.volumeInfo.title,
    author: authors ? authors.join(",") : "",
    price: price ? price.amount : 0,
    publisher: book.volumeInfo.publisher,
    published: book.volumeInfo.publishedDate,
    image: img ? img.smallThumbnail : "/vercel.svg",
  };
}

export async function getBooksByKeyword(keyword: string): Promise<Book[]> {
  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}&langRestrict=ja&maxResults=20&printType=books`
    );

    if (!res.ok)
      throw new Error(`API request failed with status ${res.status}`);

    const result = await res.json();
    if (!result.items) return [];
    const books = result.items.map((b: GoogleBookVolume) => createBook(b));

    return books;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

export async function getAllReviews(): Promise<Book[]> {
  return await prisma.reviews.findMany({
    orderBy: {
      read: "desc",
    },
  });
}

export async function getBookById(id: string) {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  const result = await res.json();
  return createBook(result);
}

export async function getReviewById(id: string) {
  return await prisma.reviews.findUnique({
    where: {
      id: id,
    },
  });
}
