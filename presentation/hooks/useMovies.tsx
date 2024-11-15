import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { SearchAnything } from "@/core/actions/movies/search.action"
import { topRatedAction } from "@/core/actions/movies/top-rated.action"
import { upcomingAction } from "@/core/actions/movies/upcoming.action"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"


export const useMovies = () => {

    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24 // Datos recientes por 24 horas
    })

    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24
    })

    const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'topRated'],
        queryFn: ({ pageParam }) => {
            return topRatedAction( { page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24,
        getNextPageParam: ( _ , pages ) => pages.length + 1
    });

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
