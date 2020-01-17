import React from 'react';
import { View, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import BfButton from '../components/BfButton';

const styles = {
  button: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
  },
};

export default function ImageScreen(props) {
  const { navigation } = props;
  const uri = navigation.getParam('uri');
  return (
    <View>
      <ImageBackground style={styles.image} source={{ uri }}>
        <View style={styles.view}>
          <BfButton
            style={styles.button}
            icon="ios-qr-scanner"
            label="Identify"
            onPress={() => {}}
          />
          <BfButton
            style={styles.button}
            icon="ios-save"
            label="Save"
            onPress={() => {}}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

ImageScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
