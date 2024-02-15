type Author = {
    id: number,
    firstName: string,
    lastName: string,
  };
  
  type BookResponse = {
    id: number,
    title: string,
    author_id: number,
    descriptionShort: string,
    descriptionLong: string,
    genre: string,
    cover: string,
    isFavourite: string,
    authorId: Author,
  };
  
  export default BookResponse;