package com.stagiaire.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {
	
	private Long id;
	private String fname;
	private String lname;
	private String email;
	private String role;
	private String token;
}
