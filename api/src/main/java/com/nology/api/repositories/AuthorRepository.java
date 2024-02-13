package com.nology.api.repositories;


import com.nology.api.models.Author;
import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Table(name = "author")
@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {
}
