import { Item } from './Item';

// Movie DTO
export interface TvShowDto {
  page: number;
  results: TvShow[];
  total_results: number;
  total_pages: number;
}

// Movie
export interface TvShow {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  name: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  status: string;
  genres: Genre[];
}

// Videos of Movie
export interface TvShowVideoDto {
  id: number;
  results: Video[];
}

// Video
export interface Video {
  site: string;
  key: string;
}

// Images of Movie
export interface Images {
  backdrops: {
    file_path: string;
  }[];
}

// Credits of Movie
export interface Credits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}

// Genre of Movie
export interface Genre {
  id: number;
  name: String;
}

export const mapTvShowToItem = (tvShow: TvShow): Item => {
  return {
    id: tvShow.id,
    title: tvShow.name,
    poster_path: tvShow.poster_path,
    vote_average: tvShow.vote_average,
    backdrop_path: tvShow.backdrop_path,
    vote_count: tvShow.vote_count,
    release_date: tvShow.release_date,
    overview: tvShow.overview,
    routePath: '/tvshow/' + tvShow.id,
  };
};
