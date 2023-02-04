import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { GenresComponent } from './pages/genres/genres.component';

// Routes of the website
const routes: Routes = [
  {
    path: '', // root page
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movies/genre/:id',
    component: MoviesComponent,
  },
  {
    path: 'movie/:id', // path /movie with param /id -> movie/2343
    component: MovieComponent,
  },
  {
    path: 'genres',
    component: GenresComponent,
  },
  {
    path: '**', // page that does not exist
    redirectTo: '', // move to root page
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
