package com.stagiaire.springboot.controller;

import java.net.URI;
import java.security.NoSuchAlgorithmException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stagiaire.springboot.config.UserAuthProvider;
import com.stagiaire.springboot.dto.CredentialsDto;
import com.stagiaire.springboot.dto.SignUpDto;
import com.stagiaire.springboot.model.UserDto;
import com.stagiaire.springboot.service.impl.UserServiceImpl;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class AuthController {
	
	private final UserServiceImpl userService;
	private final UserAuthProvider userAuthProvider;
	@PostMapping("/login")
	public ResponseEntity<UserDto> login(@RequestBody @Valid CredentialsDto credentialsDto){
		UserDto user = userService.login(credentialsDto);
		user.setToken(userAuthProvider.createToken(user));
		return ResponseEntity.ok(user);
	}
	
	@PostMapping("/register")
	public ResponseEntity<UserDto> register(@RequestBody SignUpDto signUpDto) throws NoSuchAlgorithmException
	{
		
		UserDto user = userService.register(signUpDto);
		user.setToken(userAuthProvider.createToken(user));
		return ResponseEntity.created(URI.create("/users/" + user.getId())).body(user);
	}

}
