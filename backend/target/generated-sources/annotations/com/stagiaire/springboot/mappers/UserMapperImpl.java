package com.stagiaire.springboot.mappers;

import com.stagiaire.springboot.dto.SignUpDto;
import com.stagiaire.springboot.model.User;
import com.stagiaire.springboot.model.UserDto;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-08-11T16:40:48+0100",
    comments = "version: 1.5.3.Final, compiler: Eclipse JDT (IDE) 3.34.0.v20230523-1233, environment: Java 17.0.7 (Eclipse Adoptium)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDto toUserDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserDto.UserDtoBuilder userDto = UserDto.builder();

        userDto.email( user.getEmail() );
        userDto.fname( user.getFname() );
        userDto.id( user.getId() );
        userDto.lname( user.getLname() );
        userDto.role( user.getRole() );

        return userDto.build();
    }

    @Override
    public User signUpToUser(SignUpDto signUpDto) {
        if ( signUpDto == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.dob( signUpDto.dob() );
        user.email( signUpDto.email() );
        user.fname( signUpDto.fname() );
        user.gender( signUpDto.gender() );
        user.lname( signUpDto.lname() );
        user.role( signUpDto.role() );

        return user.build();
    }
}
