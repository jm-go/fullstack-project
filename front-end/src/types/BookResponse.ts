type Author = {
    id: number;
    first_name: string;
    last_name: string;
  };
  
  type BookResponse = {
    id: number;
    cover: string;
    title: string;
    author_id: number;
    description_short: string;
    genre: string;
    description_long: string;
    is_favourite: boolean;
    author: Author;
  };
  
  export default BookResponse;