import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { SearchAnything } from '../../../core/actions/movies/search.action';
import { Movie } from '@/infraestructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';

export default function SearchScreen() {


    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState<Movie[]>([]);

    const handleSearch = async () => {
        try {
            const results = await SearchAnything(query);
            setMovies(results);

        } catch (error) {
            console.log('Error in search:', error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Buscar películas..."
                value={query}
                onChangeText={setQuery}
            />
            <View style={styles.buttonContainer}>
            <Button title="Buscar" onPress={handleSearch} color="#212529" />
            </View>

            <FlatList
                horizontal
                data={movies}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#14161E',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        color: '#fff', 
    },
    movieItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '',
    },
    movieTitle: {
        fontSize: 16,
    },
    buttonContainer: {
        marginBottom: 20, 
      },
});
