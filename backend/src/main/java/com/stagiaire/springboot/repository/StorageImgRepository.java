package com.stagiaire.springboot.repository;
 import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stagiaire.springboot.model.BookImg;

public interface StorageImgRepository extends JpaRepository<BookImg,Long>{
    Optional<BookImg> findById(Long id);

}
