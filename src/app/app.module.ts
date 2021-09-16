import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';
import { OnePageComponent } from './one-page/one-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    PhotoComponent,
    OnePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
