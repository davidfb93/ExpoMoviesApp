import React, { useRef } from 'react';
import {
    View,
    Animated,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { Movie } from '@/infraestructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';

interface Props {
    movies: Movie[];
}

const { width } = Dimensions.get('window');
const ITEM_WIDTH = 200;
const ITEM_HEIGHT = 350;
const ITEM_SPACING = (width - ITEM_WIDTH) / 2;

const MainSlideshow = ({ movies }: Props) => {
    const scrollX = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
            <Animated.FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={ITEM_WIDTH}
                decelerationRate="fast"
                bounces={false}
                contentContainerStyle={{
                    paddingHorizontal: ITEM_SPACING,
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                initialScrollIndex={1}
                getItemLayout={(data, index) => ({
                    length: ITEM_WIDTH,
                    offset: ITEM_WIDTH * index,
                    index,
                })}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * ITEM_WIDTH,
                        index * ITEM_WIDTH,
                        (index + 1) * ITEM_WIDTH,
                    ];

                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.8, 1, 0.8],
                        extrapolate: 'clamp',
                    });

                    const translateX = scrollX.interpolate({
                        inputRange,
                        outputRange: [-50, 0, 50],
                        extrapolate: 'clamp',
                    });

                    return (
                        <Animated.View
                            style={[
                                styles.itemContainer,
                                { transform: [{ scale }, { translateX }] },
                            ]}
                        >
                            <View style={styles.background}>
                                <MoviePoster
                                    id={item.id}
                                    poster={item.poster}
                                    smallPoster={false}
                                />
                            </View>
                        </Animated.View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        backgroundColor: 'transparent',
    },
    background: {
        flex: 1,
        backgroundColor: '#14161E',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
});

export default MainSlideshow;
