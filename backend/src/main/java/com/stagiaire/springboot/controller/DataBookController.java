package com.stagiaire.springboot.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.stagiaire.springboot.model.BookFile;
import com.stagiaire.springboot.service.StorageFileService;

@SpringBootApplication
@RestController
@RequestMapping("/upload")
public class DataBookController {

	@Autowired
	private StorageFileService storageService;
	

	@PostMapping
	public BookFile uploadPdf(@RequestParam("pdf")MultipartFile file)throws IOException
	{
		return storageService.uploadPdf(file);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> dowloadPdf(@PathVariable Long id){
		byte[] pdfData=storageService.downloadPdf(id);
		return ResponseEntity.status(HttpStatus.OK)
				.contentType(MediaType.valueOf("application/pdf"))
				.body(pdfData);
		
	
	

	}
	@GetMapping("/download")
	public List<BookFile> findAllFiles()
	{
		return storageService.getAllFiles();
	}
	
}
