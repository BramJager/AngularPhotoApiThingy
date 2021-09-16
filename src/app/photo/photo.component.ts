import { Component, Input, OnInit } from '@angular/core';
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

    @Input() photo: Photo = new Photo;

  ngOnInit(): void {
  }

}
