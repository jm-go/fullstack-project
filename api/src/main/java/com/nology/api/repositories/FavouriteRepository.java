package com.nology.api.repositories;


import com.nology.api.models.Favourite;
import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Table(name = "favourite")
@Repository
public interface FavouriteRepository extends JpaRepository<Favourite, Long> {
}
