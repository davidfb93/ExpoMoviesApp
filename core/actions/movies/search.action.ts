import { movieApi2 } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";



export const SearchAnything = async ( query: string ) => {

    try {
        const { data } = await movieApi2.get<MovieDBMoviesResponse>('', {
            params: {
                query // Query para iniciar busqueda por pantalla
            }
        });

        const movies = data.results.map( MovieMapper.fromTheMovieDBToMovie )

        return movies;
        
    } catch (error) {
        console.log(error)
        throw 'Error load in SearchAnything';
    }


}
