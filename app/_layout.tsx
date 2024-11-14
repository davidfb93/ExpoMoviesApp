
import { View, Text } from 'react-native'

import '../global.css';
import { nowPlayingAction, SearchAnything } from '@/core/actions/movies/now-playing.action';

const RootLayout = () => {

  nowPlayingAction();
  //SearchAnything();

  return (
    <View>
      <Text>RootLayout</Text>
    </View>
  )
}

export default RootLayout