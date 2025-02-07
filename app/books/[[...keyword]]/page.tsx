import { JSX } from "react";
import { Book } from "@/types/book";
import { getBooksByKeyword } from "@/app/lib/dbQueries";
import LinkedBookDetails from "@/components/LinkedBookDetails";

export default async function BookResult({
  params: { keyword = "React" },
}: {
  params: { keyword: string };
}): Promise<JSX.Element> {
  const books = await getBooksByKeyword(keyword);

  return (
    <>
      {books.map((b: Book, i: number) => (
        <LinkedBookDetails book={b} index={i + 1} key={b.id} />
      ))}
    </>
  );
}
