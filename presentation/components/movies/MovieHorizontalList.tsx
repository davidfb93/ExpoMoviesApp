
import { Movie } from '@/infraestructure/interfaces/movie.interface'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import MoviePoster from './MoviePoster'

interface Props {
  title?: string,
  movies: Movie[]
}



const MovieHorizontalList = ({ title, movies }: Props) => {
  return (
    <View>
      {title && <Text style={styles.title}>{title}</Text>}
      
      <FlatList
        style={styles.flatlist}
        horizontal
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}

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

