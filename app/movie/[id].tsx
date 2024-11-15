import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router'

import MovieHeader from '@/presentation/components/movie/MovieHeader';
import MovieDescription from '@/presentation/components/movie/MovieDescription';

const MovieScreen = () => {

  const { id } = useLocalSearchParams();

  const { movieQuery } = useMovie(+id)

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className='flex flex-1 justify-center items-center'>
        <Text className='mb-8'>Espere por favor...</Text>
        <ActivityIndicator size="large" color="black" />
      </View>
    )
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movieQuery.data.originalTitle}
        title={movieQuery.data.title}
        poster={movieQuery.data.poster}
      />

      <MovieDescription />


    </ScrollView>
  )
}
export default MovieScreen