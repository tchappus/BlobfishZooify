import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config,
);

const HomeStackTabBarIcon = ({ focused }) => (
  <TabBarIcon
    focused={focused}
    name={
      Platform.OS === 'ios'
        ? `ios-information-circle${focused ? '' : '-outline'}`
        : 'md-information-circle'
    }
  />
);

HomeStackTabBarIcon.propTypes = {
  focused: PropTypes.objectOf(PropTypes.bool).isRequired,
};

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: HomeStackTabBarIcon,
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config,
);

const LinksStackTabBarIcon = ({ focused }) => (
  <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
  />
);

LinksStackTabBarIcon.propTypes = {
  focused: PropTypes.objectOf(PropTypes.bool).isRequired,
};

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: LinksStackTabBarIcon,
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config,
);

const SettingsStackTabBarIcon = ({ focused }) => (
  <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
  />
);

SettingsStackTabBarIcon.propTypes = {
  focused: PropTypes.objectOf(PropTypes.bool).isRequired,
};

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: SettingsStackTabBarIcon,
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
