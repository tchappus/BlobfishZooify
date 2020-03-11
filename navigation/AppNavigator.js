import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import StackNaviGator from './StackNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Main: StackNaviGator,
  }),
);
