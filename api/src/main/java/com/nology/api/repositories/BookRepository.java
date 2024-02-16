package com.nology.api.repositories;


import com.nology.api.models.Book;
import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Table(name = "book")
@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    // READ
    @Query(value = "SELECT * FROM book ORDER BY id", nativeQuery = true)
    List<Book> getAllById();

    @Query(value = "SELECT * FROM book WHERE is_favourite = 'true'", nativeQuery = true)
    List<Book> getAllFavouriteBooks();

    // DELETE
    void deleteBookById(long id);
}
