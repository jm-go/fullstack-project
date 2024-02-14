package com.nology.api;


import com.nology.api.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    // Change it ??
//    @GetMapping("/books")
//    public ResponseEntity<List<Book>> getGreetings(@RequestParam(required = false) String countryName, @RequestParam(defaultValue = "200") int limit) {
//
//        if (authorName != null) {
//            return ResponseEntity.status(HttpStatus.OK).body(apiService.getGreetingsByCountryName(countryName, limit));
//        }
//
//        return ResponseEntity.status(HttpStatus.OK).body(apiService.getAllBooks(limit));
//    }

    // Delete
//    @DeleteMapping("/books/{id}")
//    public ResponseEntity<Void> deleteBookById(@PathVariable long id) {
//        apiService.deleteBookById(id);
//        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
//    }


}