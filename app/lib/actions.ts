"use server";

import prisma from "./prisma";
import { getBookById } from "./dbQueries";
import { redirect } from "next/navigation";

export async function addReview(data: FormData) {
  const book = await getBookById(data.get("id") as string);
  const input = {
    title: book.title,
    author: book.author,
    price: Number(book.price),
    publisher: book.publisher,
    published: book.published,

    image: book.image,
    read: new Date(data.get("read") as string),
    memo: data.get("memo") as string,
  };

  await prisma.reviews.upsert({
    update: input,
    create: {
      id: data.get("id") as string,
      title: book.title,
      author: book.author,
      price: Number(book.price),
      publisher: book.publisher ?? "",
      published: book.published ?? "",
      image: book.image,
      read: new Date(data.get("read") as string),
      memo: data.get("memo") as string,
    },
    where: {
      id: data.get("id") as string,
    },
  });

  redirect("/");
}

export async function removeReview(data: FormData) {
  await prisma.reviews.delete({
    where: {
      id: data.get("id") as string,
    },
  });
  redirect("/");
}
