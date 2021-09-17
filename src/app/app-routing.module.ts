import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnePageComponent } from './one-page/one-page.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [
  {path: "", component: OnePageComponent},
  {path: "photo/:id", component: PhotoComponent},
  {path: "photolist", component: PhotoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
