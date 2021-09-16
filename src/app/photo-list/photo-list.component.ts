import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  stringId: string | null = null;

  photo: Photo = new Photo;

  ngOnInit(): void {
    this.photoService.getAll().subscribe(data => {this.photos = data});
  }

  @Output() newItemEvent = new EventEmitter<Photo>();

  setPhoto(id : number){
    this.stringId = id.toString();
    this.photoService.getPhoto(this.stringId).subscribe(data => this.newItemEvent.emit(data)); 
  }
}
