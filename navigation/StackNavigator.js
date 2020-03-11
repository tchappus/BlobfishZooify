import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import * as Screens from '../screens';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const TheStackAttack = createStackNavigator(
  {
    Home: Screens.HomeScreen,
    List: Screens.ListScreen,
    Camera: Screens.CameraScreen,
    Image: Screens.ImageScreen,
    Result: Screens.ResultScreen,
    Search: Screens.SearchScreen,
    Animal: Screens.AnimalScreen,
  },
  config,
);

export default TheStackAttack;
