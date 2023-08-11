package com.stagiaire.springboot.controller;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.stagiaire.springboot.model.BookImg;
import com.stagiaire.springboot.service.StorageImgService;

import java.io.IOException;

@SpringBootApplication
@RestController
@RequestMapping("/image")
public class ImgBookController {

	
	@Autowired
	private StorageImgService service;

	@PostMapping
	public   BookImg uploadImage(@RequestParam("image")MultipartFile file) throws IOException {
		return  service.uploadImage(file);
		//return ResponseEntity.status(HttpStatus.OK)
			//	.body(uploadImage);
	//	return service.uploadPdf(file);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> downloadImage(@PathVariable Long id){
		byte[] imageData=service.downloadImage(id);
		return ResponseEntity.status(HttpStatus.OK)
				.contentType(MediaType.valueOf("image/png"))
				.body(imageData);

	}
	
	@DeleteMapping("/del/{id}")
	public void deleteImage(@PathVariable("id") Long id) throws IOException {
		 service.deleteImage(id);
		 

	}
 
}
