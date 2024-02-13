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

    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBooksById(@PathVariable long id) {
        return ResponseEntity.status(HttpStatus.OK).body(apiService.getBookById(id));
    }

}