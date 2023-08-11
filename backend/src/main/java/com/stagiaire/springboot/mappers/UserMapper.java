package com.stagiaire.springboot.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.stagiaire.springboot.dto.SignUpDto;
import com.stagiaire.springboot.model.User;
import com.stagiaire.springboot.model.UserDto;

@Mapper(componentModel = "spring")
public interface UserMapper {
	
	UserDto toUserDto(User user);

	@Mapping(target = "password" , ignore = true)
	User signUpToUser(SignUpDto signUpDto);

}
