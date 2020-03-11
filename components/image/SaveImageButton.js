import React, { useState } from 'react';
import { CameraRoll } from 'react-native';

import BfButton from '../BfButton';

import Window from '../../constants/Window';

const styles = {
  button: {
    marginBottom: 20,
    width: Window.width / 2 - 40,
  },
};

export default function SaveImageButton(props) {
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
