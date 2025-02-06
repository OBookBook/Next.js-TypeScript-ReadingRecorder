export interface Book {
  id: string;
  image: string;
  title: string;
  price: number;
  author: string;
  publisher: string;
  published: string;
}

export interface BookDetailsProps {
  index?: number;
  book: Book;
}
