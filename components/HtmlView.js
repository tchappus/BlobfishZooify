/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';
import HTML from 'react-native-render-html';

import Layout from '../constants/Layout';
import Fonts from '../constants/Fonts';

const styles = {
  container: {
    width: Layout.window.width - 60,
    marginLeft: 30,
    marginRight: 30,
  },
  content: {
    div: {
      fontFamily: Fonts.regular,
    },
    h1: {
      fontFamily: Fonts.bold,
    },
    h2: {
      fontFamily: Fonts.bold,
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
        imagesMaxWidth={Layout.window.width - 60}
      />
    </View>
  );
}
