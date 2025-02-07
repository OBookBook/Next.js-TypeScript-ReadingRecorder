export interface Book {
  id: number;
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
