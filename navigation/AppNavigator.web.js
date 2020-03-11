import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import StackNavigator from './StackNavigator';

const switchyWishyNavigator = createSwitchNavigator({
  Main: StackNavigator,
});
switchyWishyNavigator.path = '';

export default createBrowserApp(switchyWishyNavigator, { history: 'hash' });
