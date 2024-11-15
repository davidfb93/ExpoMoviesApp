
import { movieApi } from "@/core/api/movie-api";
import { MovieDBCreditsResponse } from "@/infraestructure/interfaces/moviedb-credits.response";
import { CastMapper } from "@/infraestructure/mappers/cast.mapper";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";



export const getMovieCastAction = async ( movieId: number ) => {

    try {

        const {data } = await movieApi.get<MovieDBCreditsResponse>(`/${movieId}/credits`);

        return data.cast.map( CastMapper.fromMovieDBCastToEntity)

    } catch (error) {
        console.log(error)
        throw 'Error load in getMovieCastAction';
    }


}
     
    
    
    