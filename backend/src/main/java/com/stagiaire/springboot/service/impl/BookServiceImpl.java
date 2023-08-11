package com.stagiaire.springboot.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


import com.stagiaire.springboot.model.Book;
import com.stagiaire.springboot.repository.BookRepository;
import com.stagiaire.springboot.service.BookService;
@Service
public class BookServiceImpl implements BookService{

	@Autowired
	private final BookRepository bookRepository;
	
	public BookServiceImpl(BookRepository bookRepository)
	{
		this.bookRepository=bookRepository;
	}
	@Override
	public List<Book> findallBooks(int pageNo,int recordCount,boolean sortb) {
		if(sortb)
		{
		Sort sort = Sort.by(Sort.Direction.ASC,"price");
		Pageable pageable = PageRequest.of(pageNo,recordCount,sort);
		return bookRepository.findAll(pageable).get().toList();
		}else
		{
		Sort sort = Sort.by(Sort.Direction.DESC,"price");
		Pageable pageable = PageRequest.of(pageNo,recordCount,sort);
		return bookRepository.findAll(pageable).get().toList();
		}
	}

	@Override
	public Optional<Book> findById(Long id) {
		return bookRepository.findById(id);
	}

	@Override
	public Book updateBook(Book book) {
		return bookRepository.save(book);
	}

	@Override
	public void deleteBook(Long id) {
		bookRepository.deleteById(id);
	}

	@Override
	public Book saveBook(Book book) {
		return bookRepository.save(book);
	}

	
}
