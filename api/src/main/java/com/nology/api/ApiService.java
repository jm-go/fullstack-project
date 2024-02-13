package com.nology.api;

import com.nology.api.models.Book;
import com.nology.api.repositories.AuthorRepository;
import com.nology.api.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApiService {

    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    BookRepository bookRepository;


    public Book getBookById(long id) {
        return bookRepository.findById(id).orElseThrow(() -> new NotFoundException("Book Not Found"));
    }




}
