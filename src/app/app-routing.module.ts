import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

const routes: Routes = [
  {path: 'aboutMe' , component: AboutMeComponent},
  {path: 'gallery' , component: PhotoGalleryComponent},
  {path: '' , redirectTo: '/gallery' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
