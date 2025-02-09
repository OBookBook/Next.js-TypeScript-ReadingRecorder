import FormEdit from "@/components/FormEdit";
import BookDetails from "@/components/BookDetails";
import { getBookById, getReviewById } from "@/app/lib/dbQueries";

type Params = Promise<{ id: string }>;

export default async function EditPage({ params }: { params: Params }) {
  const { id } = await params;
  const book = await getBookById(id);
  const review = await getReviewById(id);

  const read = (review?.read || new Date()).toLocaleDateString("sv-SE");

  return (
    <div id="form">
      <BookDetails book={book} />
      <hr />
      <FormEdit src={{ id: book.id, read, memo: review?.memo || "" }} />
    </div>
  );
}
