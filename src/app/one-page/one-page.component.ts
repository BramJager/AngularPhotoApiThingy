import { Component, OnInit } from '@angular/core';
import { Photo } from '../core/objects/photo';

@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.component.html',
  styleUrls: ['./one-page.component.scss']
})
export class OnePageComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }

  photo: Photo = new Photo;

  setPhoto(photo : Photo) : void{
    this.photo = photo;
  }

}
