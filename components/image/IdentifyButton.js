import React, { useState } from 'react';

import BfButton from '../BfButton';
import * as Fetch from '../../utils/Fetch';

import Window from '../../constants/Window';

const styles = {
  button: {
    marginBottom: 20,
    width: Window.width / 2 - 40,
  },
};

export default function IdentifyButton(props) {
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

          // create formData and make identify request
          const uriParts = uri.split('.');
          const fileType = uriParts[uriParts.length - 1];
          const image = {
            uri,
            type: `image/${fileType}`,
            name: `photo.${fileType}`,
          };
          const formData = new FormData();
          formData.append('image', image);

          const result = await Fetch.theAnimalThatIsInThis(formData);

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
      label="Please Wait..."
      onPress={() => {}}
    />
  );
}
