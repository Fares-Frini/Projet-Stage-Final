package com.stagiaire.springboot.model;

import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="mt_Book")
public class Book {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="emp_id")
	private Long id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="author")
	private String author;
	
	@Column(name="dou")
	private Date dou;
	
	@Column(name="category")
	private String category;
	
	@Column(name="sales")
	private Integer sales=0 ;
	
	@Column(name="promotion")
	private Integer promotion=0 ;
	
	@Column(name="price")
	private Integer price;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="fk_Img_id")
	private BookImg image;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="fk_file_id")
	private BookFile file;
	
}
