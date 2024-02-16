export type Author = {
  id: number;
  firstName: string;
  lastName: string;
};

type BookResponse = {
  id: number;
  title: string;
  descriptionShort: string;
  descriptionLong: string;
  genre: string;
  cover: string;
  isFavourite: string;
  author: Author;
};

export default BookResponse;
