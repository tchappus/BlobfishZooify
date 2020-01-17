import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';

const styles = {
  button: {
    backgroundColor: 'white',
    height: 80,
    width: 80,
    borderColor: Colors.torontoGrey,
    borderWidth: 2,
    borderRadius: 40,
    padding: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
};

export default function CameraScreen(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const { navigation } = props;

  let camera = null;
  const options = {
    quality: 0.6,
    exif: true,
  };

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        ref={ref => {
          camera = ref;
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              const { uri } = await camera.takePictureAsync(options);
              navigation.navigate('Image', { uri });
            }}
          >
            <Ionicons name="ios-camera" size={40} color={Colors.torontoGrey} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

CameraScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
