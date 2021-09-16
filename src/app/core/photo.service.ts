import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './objects/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient){};

  currentPhotoId: string | null = null;

  getAll() : Observable<Photo[]>{

    return this.http.get<Photo[]>("https://jsonplaceholder.typicode.com/photos");
  }

  getPhoto(id: string | null) : Observable<Photo>{
    return this.http.get<Photo>("https://jsonplaceholder.typicode.com/photos/" + id)
  }

  setCurrentId(photo: Photo) : void{
    this.currentPhotoId = photo.id.toString();
  }
}
