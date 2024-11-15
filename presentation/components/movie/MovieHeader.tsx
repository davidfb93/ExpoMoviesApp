
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { View, Text, useWindowDimensions, Image, Pressable } from 'react-native';


interface Props {
    poster: string;
    title: string;
    originalTitle: string;
}


const MovieHeader = ( {title, originalTitle, poster} : Props ) => {

    const { height: screenHeight } = useWindowDimensions();

    return (
        <>

        <View style = {{ 
            position: 'absolute',
            zIndex: 99,
            elevation: 9,
            top: 10,
            left: -3,
         }}>
            <Pressable
            onPress={ () => router.dismiss() }
            >
                <Ionicons name='arrow-back'
                size={50}  
                color='white'
                className='shadow ml-5'
                />  
            </Pressable>
        </View>

    
        <View
            style = {{ height: screenHeight * 0.80 }} 
            className='shadow-xl shadow-black/20' >
            <View className='flex-1 rounded-b-[25px] overflow-hidden'>
                <Image 
                className='flex-1' 
                    source={{ uri: poster }}
                    resizeMode='cover'
                />
            </View>
        </View>

        <View className='px-5 mt-1' style = {{ backgroundColor: '#14161E' }}>
            <Text className='font-normal color-white'>{ originalTitle }</Text>
            <Text className='font-semibold text-2xl color-white'>{ title }</Text>
        </View>

        </>
    )
}
export default MovieHeader