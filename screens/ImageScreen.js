import React from 'react';
import { View, ImageBackground } from 'react-native';

import * as ImageComps from '../components/image';

const styles = {
  image: {
    width: '100%',
    height: '100%',
  },
  view: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  buttonOverlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 90,
    margin: 30,
  },
};

export default function ImageScreen(props) {
  const { navigation } = props;
  const uri = navigation.getParam('uri');

  return (
    <View>
      <ImageBackground style={styles.image} source={{ uri }}>
        <View style={styles.view}>
          <View style={styles.buttonOverlay}>
            <ImageComps.IdentifyButton uri={uri} nav={navigation} />
            <ImageComps.SaveImageButton uri={uri} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
