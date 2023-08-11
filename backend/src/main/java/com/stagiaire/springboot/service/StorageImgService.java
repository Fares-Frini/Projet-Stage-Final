package com.stagiaire.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.stagiaire.springboot.model.BookImg;
import com.stagiaire.springboot.repository.StorageImgRepository;
import com.stagiaire.springboot.util.ImgUtils;

import java.io.IOException;
import java.util.Optional;

@Service
public class StorageImgService {

    @Autowired
    private StorageImgRepository repository;

    public BookImg uploadImage(MultipartFile file) throws IOException {

        return repository.save(BookImg.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .imageData(ImgUtils.compressImage(file.getBytes())).build());
        
    }

    public byte[] downloadImage(Long id){
        Optional<BookImg> dbImageData = repository.findById(id);
        byte[] images=ImgUtils.decompressImage(dbImageData.get().getImageData());
        return images;
    }
    
    public void deleteImage(Long id)throws IOException
    {
    	 repository.deleteById(id);
    }
}