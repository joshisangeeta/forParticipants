package com.sj.e2e.BookMgm.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.sj.e2e.BookMgm.model.Book;
@CrossOrigin(origins = "http://localhost:4200")
public interface BookRepository extends JpaRepository< Book, Integer> {

	//Book save(Book book);
    
    Optional<Book> findById(Integer id);
    
   // boolean existsById(Integer id);
    
   // List<Book> findAll();
    
   // void deleteById(Integer ID);
    
	
	
	
	
}
