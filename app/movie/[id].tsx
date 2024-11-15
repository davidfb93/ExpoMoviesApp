import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'


const MovieScreen = () => {

    const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>MovieScreen</Text>
    </View>
  )
}
export default MovieScreen