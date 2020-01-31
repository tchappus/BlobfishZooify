import React, { useState } from 'react';
import { View, ImageBackground, CameraRoll } from 'react-native';
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

function SaveImageButton(props) {
  const { uri } = props;
  const [imgSaved, setImgSaved] = useState(false);
  if (!imgSaved) {
    return (
      <BfButton
        style={styles.button}
        icon="ios-save"
        label="Save"
        onPress={async () => {
          await CameraRoll.saveToCameraRoll(uri, 'photo');
          setImgSaved(true);
        }}
      />
    );
  }
  return (
    <BfButton
      disabled
      style={styles.button}
      icon="ios-checkmark-circle-outline"
      label="Saved"
      onPress={() => {}}
    />
  );
}

function IdentifyButton(props) {
  const { uri, nav } = props;
  const [identifying, setIdentifying] = useState(false);
  if (!identifying) {
    return (
      <BfButton
        style={styles.button}
        icon="ios-qr-scanner"
        label="Identify"
        onPress={async () => {
          setIdentifying(true);
          const uriParts = uri.split('.');
          const fileType = uriParts[uriParts.length - 1];
          const image = {
            uri,
            type: `image/${fileType}`,
            name: `photo.${fileType}`,
          };

          const formData = new FormData();
          formData.append('image', image);

          const response = await fetch(
            'https://zooify20200130112611.azurewebsites.net/api/values',
            {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'multipart/form-data',
              },
              body: formData,
            },
          );
          const result = await response.text();
          setIdentifying(false);
          nav.navigate('Result', { uri, result });
        }}
      />
    );
  }
  return (
    <BfButton
      disabled
      style={styles.button}
      icon="ios-cloud-circle"
      label="Identifying..."
      onPress={() => {}}
    />
  );
}

export default function ImageScreen(props) {
  const { navigation } = props;
  const uri = navigation.getParam('uri');

  return (
    <View>
      <ImageBackground style={styles.image} source={{ uri }}>
        <View style={styles.view}>
          <IdentifyButton uri={uri} nav={navigation} />
          <SaveImageButton uri={uri} />
        </View>
      </ImageBackground>
    </View>
  );
}

ImageScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

SaveImageButton.propTypes = {
  uri: PropTypes.string.isRequired,
};

IdentifyButton.propTypes = {
  uri: PropTypes.string.isRequired,
  nav: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
