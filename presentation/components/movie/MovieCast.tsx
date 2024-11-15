
import { Cast } from '@/infraestructure/interfaces/cast'
import { View, Text, FlatList } from 'react-native'
import { ActorCard } from './ActorCard';

interface Props {
    cast: Cast[];
}


const MovieCast = ({ cast }: Props) => {
  return (
    <View 
    style = {{ backgroundColor: '#14161E' }}>
      <Text className='text-white ml-4 mt-4 text-2xl font-bold'>Actores principales</Text>

    <FlatList 
    className='mt-5'
    data = { cast }
    keyExtractor={ ( item ) =>item.id.toString() }
    horizontal
    showsHorizontalScrollIndicator={ false }
    renderItem={({ item }) => <ActorCard actor = { item }/> }
    />
    </View>
  )
}
export default MovieCast