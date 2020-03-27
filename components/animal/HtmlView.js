import React from 'react';
import { View } from 'react-native';
import HTML from 'react-native-render-html';

import Window from '../../constants/Window';
import Fonts from '../../constants/Fonts';

const styles = {
  container: {
    width: Window.width - 60,
    marginHorizontal: 30,
  },
  content: {
    div: {
      fontFamily: Fonts.regular,
    },
  },
};

export default function HtmlView(props) {
  const { html } = props;

  return (
    <View style={styles.container}>
      <HTML
        tagsStyles={styles.content}
        html={html}
        imagesMaxWidth={styles.container.width}
      />
    </View>
  );
}
