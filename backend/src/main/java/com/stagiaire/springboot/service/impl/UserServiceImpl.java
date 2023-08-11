package com.stagiaire.springboot.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.stagiaire.springboot.dto.CredentialsDto;
import com.stagiaire.springboot.dto.SignUpDto;
import com.stagiaire.springboot.exeptions.AppException;
import com.stagiaire.springboot.mappers.UserMapper;
import com.stagiaire.springboot.model.User;
import com.stagiaire.springboot.model.UserDto;
import com.stagiaire.springboot.repository.UserRepository;
import com.stagiaire.springboot.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import java.nio.CharBuffer;
import java.security.NoSuchAlgorithmException;
@Service
@RequiredArgsConstructor 
public class UserServiceImpl implements UserService{

	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final UserMapper userMapper;
	
	 public UserDto register(SignUpDto userDto) throws NoSuchAlgorithmException {
	        Optional<User> optionalUser = userRepository.findByEmail(userDto.email());

	        if (optionalUser.isPresent()) {
	            throw new AppException("Login already exists", HttpStatus.BAD_REQUEST);
	        }

	        User user = userMapper.signUpToUser(userDto);
	        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(userDto.password())));
	        
	        User savedUser = userRepository.save(user);

	        return userMapper.toUserDto(savedUser);
	    }
	 public UserDto login(CredentialsDto credentialsDto) {
	        User user = userRepository.findByEmail(credentialsDto.email())
	                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

	        if (passwordEncoder.matches(CharBuffer.wrap(credentialsDto.password()), user.getPassword())) {
	            return userMapper.toUserDto(user);
	        }
	        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
	    }
	
	@Override
	public List<User> findallUsers() {
		return userRepository.findAll();
	}

	@Override
	public Optional<User> findById(Long id) {
		return userRepository.findById(id);
	}

	public User saveUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public User updateUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
		
	}

}
