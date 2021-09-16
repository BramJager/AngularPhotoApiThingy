import { Component, OnInit } from '@angular/core';
import { Photo } from '../core/objects/photo';
import { PhotoService } from '../core/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  constructor(private photoService: PhotoService) { 

  }

  photos: Photo[] = [];

  ngOnInit(): void {
    this.photoService.getAll().subscribe(data => {this.photos = data});
  }
}
