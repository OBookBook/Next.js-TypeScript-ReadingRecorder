import { JSX } from "react";
import { Book } from "@/types/book";
import { getBooksByKeyword } from "@/app/lib/dbQueries";
import LinkedBookDetails from "@/components/LinkedBookDetails";

type Params = Promise<{ keyword: string }>;

export default async function BookResult({
  params,
}: {
  params: Params;
}): Promise<JSX.Element> {
  const { keyword } = await params;
  const books = await getBooksByKeyword(keyword);

  return (
    <>
      {books.map((b: Book, i: number) => (
        <LinkedBookDetails book={b} index={i + 1} key={b.id} />
      ))}
    </>
  );
}
