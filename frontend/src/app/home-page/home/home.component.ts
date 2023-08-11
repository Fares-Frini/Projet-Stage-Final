import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  carouselImages = 
  [
    {
      imageSrc:
      'https://via.placeholder.com/400',
      imageAlt:
      'image1',
    },
    {
      imageSrc:
      'https://via.placeholder.com/400',
      imageAlt:
      'image2',
    },
    {
      imageSrc:
      'https://via.placeholder.com/400',
      imageAlt:
      'image2',
    },
    {
      imageSrc:
      'https://via.placeholder.com/400',
      imageAlt:
      'image2',
    },
    {
      imageSrc:
      'https://via.placeholder.com/400',
      imageAlt:
      'image2',
    }
  ]
}
