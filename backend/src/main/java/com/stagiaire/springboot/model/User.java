	package com.stagiaire.springboot.model;

	import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Set;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Table(name="mt_User")
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="emp_id")
	private Long id;
	
	@Column(name="fname")
	private String fname;
	
	@Column(name="lname")
	private String lname;
	
	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;
	
	@Column(name="dob")
	private Date dob;
	
	@Column(name="gender")
	private String gender;
	
	@Column(name="role")
	private String role;

	@ManyToMany(targetEntity = Book.class, fetch = FetchType.LAZY)
	@JoinTable(name= "USER_BOOK_TABLE",
	joinColumns = {
			@JoinColumn(name= "user_id",referencedColumnName ="emp_id" )
	},
	inverseJoinColumns = {
			@JoinColumn(name= "book_id",referencedColumnName ="emp_id" )
	}
			)
	private Set<Book> books;
	
	public void setDob(String dob)throws ParseException {
		SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd");
		this.dob=formatter.parse(dob);
	}
	@Override
	public String toString() {
		return "User [fname=" + fname + ", lname=" + lname + ", email=" + email + ", password=" + password + ", dob="
				+ dob + ", gender=" + gender + "]";
	}

	public Set<Book> getBooks() {
		return books;
	}
	public void setBooks(Set<Book> books) {
		this.books = books;
	}
	
	
}
