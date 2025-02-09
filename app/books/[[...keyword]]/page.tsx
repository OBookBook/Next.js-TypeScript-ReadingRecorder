import { JSX } from "react";
import { Book } from "@/types/book";
import { getBooksByKeyword } from "@/app/lib/dbQueries";
import LinkedBookDetails from "@/components/LinkedBookDetails";

export async function generateStaticParams() {
  return [
    { keyword: ["programming"] },
    { keyword: ["javascript"] },
    { keyword: ["react"] },
    { keyword: [] },
  ];
}

type Params = Promise<{ keyword?: string[] }>;

export default async function BookResult({
  params,
}: {
  params: Params;
}): Promise<JSX.Element> {
  const { keyword } = await params;
  // キーワードが存在しない場合は空文字列を使用
  const searchKeyword = keyword?.[0] || "";
  const books = await getBooksByKeyword(searchKeyword);

  return (
    <>
      {books.map((b: Book, i: number) => (
        <LinkedBookDetails book={b} index={i + 1} key={b.id} />
      ))}
    </>
  );
}
