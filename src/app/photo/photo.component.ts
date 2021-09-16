import { Component, OnInit } from '@angular/core';
import { Photo } from '../core/objects/photo';
import { PhotoService } from '../core/photo.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor(private photoService: PhotoService, private route: ActivatedRoute,
    private router: Router) { }

  photo: Photo = new Photo;
  photoId: number = 0;

  ngOnInit(): void {
    const photoId = this.route.snapshot.paramMap.get('id');
    this.photoService.getPhoto(photoId).subscribe(data => {this.photo = data});
  }

  gotoItems(photo: Photo) {
    const photoId = photo ? photo.id : null;
    this.router.navigate(['/photo', { id: photoId }]);
  } 

}
