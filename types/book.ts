export interface Book {
  id: string;
  image: string;
  title: string;
  price: number;
  author: string;
  publisher?: string;
  published?: string;
}

export interface BookDetailsProps {
  index?: number;
  book: Book;
}

export interface GoogleBookVolume {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    imageLinks?: {
      smallThumbnail: string;
    };
  };
  saleInfo: {
    listPrice?: {
      amount: number;
    };
  };
}
