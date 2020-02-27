import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import Colors from './constants/Colors';
import ZooData from './utils/ZooData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.torontoBackground,
  },
});

let animals = null;

async function loadResourcesAsync() {
  await Promise.all([
    (animals = ZooData()),
    Asset.loadAsync([
      require('./assets/images/anicons/anicons-African-Savanna.png'),
      require('./assets/images/anicons/anicons-Americas.png'),
      require('./assets/images/anicons/anicons-Australasia.png'),
      require('./assets/images/anicons/anicons-Canadian-DOmain.png'),
      require('./assets/images/anicons/anicons-Discovery-Zone.png'),
      require('./assets/images/anicons/anicons-Eurasia-Wilds.png'),
      require('./assets/images/anicons/anicons-Indo-Malaya.png'),
      require('./assets/images/anicons/anicons-Tundra-Trek.png'),
      require('./assets/images/anicons/anicons-Plants.png'),
      require('./assets/images/anicons/Wased-ashore-solid.png'),
    ]),
    Font.loadAsync({
      // tab bar font
      ...Ionicons.font,
      'LibreFranklin-Bold': require('./assets/fonts/LibreFranklin-Bold.ttf'),
      'LibreFranklin-Medium': require('./assets/fonts/LibreFranklin-Medium.ttf'),
      'PatrickHandSC-Regular': require('./assets/fonts/PatrickHandSC-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  // eslint-disable-next-line no-console
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const { skipLoadingScreen } = props;

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator />
    </View>
  );
}

App.propTypes = {
  skipLoadingScreen: PropTypes.bool,
};

App.defaultProps = {
  skipLoadingScreen: false,
};
