package com.nology.api.repositories;


import com.nology.api.models.Author;
import com.nology.api.models.Book;
import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Table(name = "author")
@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {

    @Query(value = "SELECT * FROM author ORDER BY id", nativeQuery = true)
    List<Author> getAllById();
}
