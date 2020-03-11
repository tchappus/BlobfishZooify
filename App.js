import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import Colors from './constants/Colors';
import ZooData from './utils/ZooData';

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.torontoBackground,
  },
};

let animals = null;
const discovered = [];

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
      ...Ionicons.font,
      'LibreFranklin-Bold': require('./assets/fonts/LibreFranklin-Bold.ttf'),
      'LibreFranklin-Medium': require('./assets/fonts/LibreFranklin-Medium.ttf'),
      'PatrickHandSC-Regular': require('./assets/fonts/PatrickHandSC-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // eslint-disable-next-line no-console
  console.warn(error);
}

function addToDiscovered(name, image) {
  discovered[name] = image;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    addToDiscovered.bind(this);
    this.state = {
      loadingComplete: false,
    };
  }

  render() {
    const { loadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;

    if (!loadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={loadResourcesAsync}
          onError={handleLoadingError}
          onFinish={() => this.setState({ loadingComplete: true })}
        />
      );
    }

    const screenProps = {
      // eslint-disable-next-line no-underscore-dangle
      animals: animals._55,
      discovered,
      addToDiscovered,
    };

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <AppNavigator screenProps={screenProps} />
      </View>
    );
  }
}
