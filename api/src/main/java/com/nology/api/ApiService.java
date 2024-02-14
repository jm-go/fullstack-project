package com.nology.api;

import com.nology.api.models.Author;
import com.nology.api.models.Book;
import com.nology.api.repositories.AuthorRepository;
import com.nology.api.repositories.BookRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ApiService {

    private final AuthorRepository authorRepository;
    private final BookRepository bookRepository;


    @Autowired
    public ApiService(BookRepository bookRepository, AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;

    }

    // Create
    public Book addBook(Book book) {

        Author newAuthor = authorRepository.findById(book.getAuthorId().getId()).orElseThrow(() ->  new NotFoundException("Author Not Found."));
        Book newBook = bookRepository.save(book);

        newBook.setAuthorId(newAuthor);

        return newBook;
    }

    // Read
    public Book getBookById(long id) {
        return bookRepository.findById(id).orElseThrow(() -> new NotFoundException("Book Not Found."));
    }

//    public List<Book> getAllBooks(int limit) {
//        return bookRepository
//                .getAllByOrderByDateCreatedDesc()
//                .stream()
//                .limit(limit)
//                .collect(Collectors.toList());
//
//    }

    // Delete
    @Transactional
    public void deleteBookById(long id) {
        if (!bookRepository.existsById(id)) {
            throw new NotFoundException("Book Not Found.");
        }

        bookRepository.deleteBookById(id);
    }




}
