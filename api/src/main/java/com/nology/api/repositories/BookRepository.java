package com.nology.api.repositories;


import com.nology.api.models.Book;
import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Table(name = "book")
@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
}
