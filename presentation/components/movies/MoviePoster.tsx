import { router } from 'expo-router';
import { View, Text, Pressable, Image } from 'react-native'


interface Props {
    id: number;
    poster: string;
    smallPoster?: boolean;
    className?: string;
}

const MoviePoster = ({ id, poster, smallPoster = false, className }: Props) => {
    return (
        <Pressable 
        className={`active:opacity-80 px-2 ${className}`}
        onPress={ () => router.push( `./movie/${ id }` ) }
        >
            <Image
                source={{ uri: poster }}
                className='rounded-2xl w-full h-full'
                style={{
                    width: smallPoster ? 85 : 150,
                    height: smallPoster ? 140 : 250,
                }}
                resizeMode='cover'
            />
        </Pressable>
    )
}
export default MoviePoster