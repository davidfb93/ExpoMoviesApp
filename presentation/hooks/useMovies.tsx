import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { SearchAnything } from "@/core/actions/movies/search.action"
import { topRatedAction } from "@/core/actions/movies/top-rated.action"
import { upcomingAction } from "@/core/actions/movies/upcoming.action"
import { useQuery } from "@tanstack/react-query"


export const useMovies = () => {

    // const searchAnythingQuery = useQuery({
    //     queryKey: ['movies', 'SearchAnything'],
    //     queryFn: SearchAnything,
    //     staleTime: 1000 * 60 * 60 * 24
    // })

    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 // Datos frescos por 24 horas
    })

    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24
    })

    const topRatedQuery = useQuery({
        queryKey: ['movies', 'topRated'],
        queryFn: topRatedAction,
        staleTime: 1000 * 60 * 60 * 24
    })

    const upcomingQuery = useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: upcomingAction,
        staleTime: 1000 * 60 * 60 * 24
    })



    return {
        // searchAnythingQuery,
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery
    }

}
