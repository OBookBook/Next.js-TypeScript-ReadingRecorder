import { JSX } from "react";
import { Book } from "@/types/book";
import { getBooksByKeyword } from "@/app/lib/dbQueries";
import LinkedBookDetails from "@/components/LinkedBookDetails";

export async function generateStaticParams() {
  return [
    { keyword: ["programming"] },
    { keyword: ["javascript"] },
    { keyword: ["react"] },
  ];
}

type Params = Promise<{ keyword: string[] }>;

export default async function BookResult({
  params,
}: {
  params: Params;
}): Promise<JSX.Element> {
  const { keyword } = await params;
  const books = await getBooksByKeyword(keyword[0]);

  return (
    <>
      {books.map((b: Book, i: number) => (
        <LinkedBookDetails book={b} index={i + 1} key={b.id} />
      ))}
    </>
  );
}
