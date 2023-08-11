package com.stagiaire.springboot.dto;

import java.util.Date;

public record SignUpDto(String fname, String lname , String email, String gender,Date dob,char[] password, String role ) {

}
