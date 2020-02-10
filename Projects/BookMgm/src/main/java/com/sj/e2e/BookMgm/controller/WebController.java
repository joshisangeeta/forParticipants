/**
 * 
 */
package com.sj.e2e.BookMgm.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sj.e2e.BookMgm.dao.BookRepository;
import com.sj.e2e.BookMgm.model.Book;

import ch.qos.logback.core.net.SyslogOutputStream;

//import antlr.collections.List;

/**
 * @author sangeeta
 *
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200/dashboard")
//@CrossOrigin(origins = "*")
public class WebController {

	    @Autowired BookRepository bookRepo;
	    @GetMapping("/dashboard")
	   // @CrossOrigin(origins = "http://localhost:4200")
	    @CrossOrigin(origins = "*")
	    public List<Book> home()
	    {
	    	System.out.println("in home..");
	    //	ArrayList<Book> books  = new ArrayList<Book>();
	    	
	    	//   books = (ArrayList<Book>) bookRepo.findAll();
	    	 // System.out.println("books+"+ books);
	      //  model.addAttribute("books", bookRepo.findAll());
	      //  return books.toArray();
	        return bookRepo.findAll();
	       // return "index";
	    }
	    
	    
	    @GetMapping("/books/{id}")
		   // @CrossOrigin(origins = "http://localhost:4200")
		    @CrossOrigin(origins = "*")
	    public Optional <Book> getById(@PathVariable Integer id){
	    	System.out.println(id);
	    	Optional<Book> b = bookRepo.findById(id);
	    	System.out.println(b);
	    	return b;
	    }
	    
	    
	    
	    
	    
	
}
