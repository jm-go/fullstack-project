type BookRequest = {
    id: number;
    cover: string;
    title: string;
    author_id: number;
    description_short: string;
    genre: string;
    description_long: string;
    is_favourite: boolean;
  };
  
  export default BookRequest;