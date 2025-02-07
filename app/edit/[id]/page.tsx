import FormEdit from "@/components/FormEdit";
import BookDetails from "@/components/BookDetails";
import { getBookById, getReviewById } from "@/app/lib/dbQueries";

export default async function EditPage({ params }: { params: { id: string } }) {
  const book = await getBookById(params.id);
  const review = await getReviewById(params.id);
  const read = (review?.read || new Date()).toLocaleDateString("sv-SE");

  return (
    <div id="form">
      <BookDetails book={book} />
      <hr />
      <FormEdit src={{ id: book.id, read, memo: review?.memo || "" }} />
    </div>
  );
}
