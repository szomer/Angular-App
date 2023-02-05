import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { GenresComponent } from './pages/genres/genres.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { TvshowComponent } from './pages/tvshow/tvshow.component';

// Routes of the website
const routes: Routes = [
  {
    path: '', // root page
    component: HomeComponent,
  },
  {
    path: 'movies', // display movies
    component: MoviesComponent,
  },
  {
    path: 'movies/genre/:id', // display movies of genre
    component: MoviesComponent,
  },
  {
    path: 'movie/:id', // specific movie with param /id -> movie/2343
    component: MovieComponent,
  },
  {
    path: 'tvshows', // all tvshows
    component: TvshowsComponent,
  },
  {
    path: 'tvshows/genre/:id', // display tvshows of genre
    component: MoviesComponent,
  },
  {
    path: 'tvshow/:id', // specific tvshow with param /id
    component: TvshowComponent,
  },
  {
    path: 'genres', // all genres
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
