
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import { useMovies } from '@/presentation/hooks/useMovies'
import MainSlideshow from '@/presentation/components/movies/MainSlideshow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import SearchScreen from '@/presentation/components/movies/searchscreen';


const HomeScreen = () => {

  const safeArea = useSafeAreaInsets();
  const {  nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {

    return (
      <View style={styles.load}>
        <ActivityIndicator color='black' size={40} />
      </View>
    );

  }

  return (

    <ScrollView>
    <View style={{ marginTop:2, paddingBottom: 25 ,paddingTop: safeArea.top, backgroundColor: '#14161E' }}>
      <Text className='text-3xl font-bold px-4 mb-2 mt-4 color-white'>MoviesApp Expo</Text>

      <SearchScreen />

      {/* Carrusel principal - En cartelera - Uso de librerias externas */}
      <Text style = {styles.title}>En cartelera</Text>
      <MainSlideshow movies={ nowPlayingQuery.data ?? []} />

      {/* Flatlist peliculas popular - requisito técnico */}
      < MovieHorizontalList title = 'Populares' movies={ popularQuery.data ?? []} />

      < MovieHorizontalList 
        title = 'Mejor Calificadas' 
        movies={ topRatedQuery.data?.pages.flat() ?? []} 
        loadNextPage={ topRatedQuery.fetchNextPage }
        />

      < MovieHorizontalList title = 'Próximamente en cines' movies={ upcomingQuery.data ?? []} />

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  load: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default HomeScreen