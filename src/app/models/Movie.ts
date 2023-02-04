// Model for a Movie
export interface Movie {
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
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  status: string;
  genres: Genre[];
}

// Model for Genre
export interface Genre {
  id: number;
  name: String;
}

// Model for the response of the API
export interface MovieDto {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

// Model for videos of a movie
export interface MovieVideoDto {
  id: number;
  results: Video[];
}

// Model for a video
export interface Video {
  site: string;
  key: string;
}

export interface Images {
  backdrops: {
    file_path: string;
  }[];
}

export interface Credits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}
