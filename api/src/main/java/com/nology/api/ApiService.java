package com.nology.api;

import com.nology.api.models.Author;
import com.nology.api.repositories.AuthorRepository;
import com.nology.api.repositories.BookRepository;
import com.nology.api.repositories.FavouriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApiService {

    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    BookRepository bookRepository;

    @Autowired
    FavouriteRepository favouriteRepository;




}
