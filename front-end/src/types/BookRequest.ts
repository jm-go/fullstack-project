type BookRequest = {
  id: number;
  cover: string;
  title: string;
  authorId: number;
  descriptionShort: string;
  genre: string;
  descriptionLong: string;
  isFavourite: string;
};

export default BookRequest;
