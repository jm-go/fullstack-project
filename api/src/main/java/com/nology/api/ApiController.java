package com.nology.api;


import com.nology.api.models.Author;
import com.nology.api.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ApiController {

    @Autowired
    private ApiService apiService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    // Create
    @PostMapping("/book")
    public ResponseEntity<Book> createBook(
            @RequestBody Book book
    ) {
        Book newBook = apiService.addBook(book);
        return ResponseEntity.status(HttpStatus.CREATED).body(newBook);
    }

    // Read
    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable long id) {
        return ResponseEntity.status(HttpStatus.OK).body(apiService.getBookById(id));
    }

    @GetMapping("/books")
    public ResponseEntity<List<Book>> getAllBooks() {

        return ResponseEntity.status(HttpStatus.OK).body(apiService.getAllBooksOrderedById());
    }

    @GetMapping("/authors")
    public ResponseEntity<List<Author>> getAllAuthors() {

        return ResponseEntity.status(HttpStatus.OK).body(apiService.getAllAuthorsOrderedById());
    }

    @GetMapping("/favourites")
    public ResponseEntity<List<Book>> getAllFavouriteBooks() {

        return ResponseEntity.status(HttpStatus.OK).body(apiService.getAllFavouriteBooks());
    }

    // Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBookById(@PathVariable long id) {
        apiService.deleteBookById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}