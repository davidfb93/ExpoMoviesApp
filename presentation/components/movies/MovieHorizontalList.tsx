
import { View, Text, StyleSheet, FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { useEffect, useRef } from 'react'

import { Movie } from '@/infraestructure/interfaces/movie.interface'
import MoviePoster from './MoviePoster'

interface Props {
  title?: string,
  movies: Movie[]

  loadNextPage?: () => void
}


const MovieHorizontalList = ({ title, movies, loadNextPage }: Props) => {

  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);

  }, [ movies ])
  
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent

    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

    if ( !isEndReached ) return;

    isLoading.current = true;
    
    loadNextPage && loadNextPage();

    isLoading.current = false;
  };



  return (
    <View>
      {title && <Text style={styles.title}>{title}</Text>}

      <FlatList
        style={styles.flatlist}
        horizontal
        data={movies}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  flatlist: {
    paddingBottom: 20
  }
})


export default MovieHorizontalList

