import { movieApi, movieApi2 } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const nowPlayingAction = async () => {

    try {

        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing');

        const movies = data.results.map( MovieMapper.fromTheMovieDBToMovie )

        console.log( JSON.stringify(movies, null, 2) )

        return movies;

        
    } catch (error) {
        console.log(error)
        throw 'Error load in nowPlayingAction';
    }


}

export const SearchAnything = async () => {

    try {
        const { data } = await movieApi2.get<MovieDBMoviesResponse>('');
        console.log(JSON.stringify(data, null, 2))
        return [];
        
    } catch (error) {
        console.log(error)
        throw 'Error load in SearchAnything';
    }


}
