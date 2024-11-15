
import { CompleteMovie } from '@/infraestructure/interfaces/movie.interface'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
    movie: CompleteMovie;
}


const MovieDescription = ({ movie }: Props) => {
    return (

        <View style={{ backgroundColor: '#14161E' }}>

        <View className='mx-5'>
            <View className='flex flex-row'>
                <Text style = { styles.text }>{movie.rating}</Text>
                <Text style = { styles.text }> - {movie.genres.join(', ')}</Text>
            </View>
        </View>

        <Text className='font-bold mt-5 ml-4 text-2xl color-white'>Sinopsis</Text>
        <Text className='font-normal mt-2 ml-4 color-white'>{movie.description}</Text>

        <Text className='font-bold mt-5 ml-4 text-2xl color-white'>Fecha de lanzamiento</Text>
        <Text className='font-normal mt-2 ml-4 color-white'>{(movie.releaseDate).toLocaleDateString('en-MX')}</Text>

        </View>

    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        marginBottom: 10
    }
})

export default MovieDescription