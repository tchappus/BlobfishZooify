/* eslint-disable react/prop-types */
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

import HtmlView from '../components/HtmlView';
import Fonts from '../constants/Fonts';
import Layout from '../constants/Layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    width: Layout.window.width,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  headerText: {
    fontFamily: Fonts.bold,
    fontSize: 36,
    letterSpacing: -1,
    alignSelf: 'center',
    textAlign: 'center',
  },
  headerCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 150,
    width: 150,
    marginBottom: 10,
    borderRadius: 75,
  },
  webView: {
    width: Layout.window.width,
    height: 200,
    flex: 1,
  },
  tag: {
    marginBottom: 10,
    fontFamily: Fonts.bold,
    fontSize: 18,
  },
  tagValue: {
    marginBottom: 10,
    fontFamily: Fonts.regular,
    fontSize: 18,
  },
});

async function getData(animal) {
  const response = await fetch(
    `https://wrapapi.com/use/rchappus/blobfish/getAnimal/latest?wrapAPIKey=D19qDTvra80XtAYgct5KqOdPy8cSohF0&animal=${animal}`,
    {
      method: 'GET',
      mode: 'cors',
    },
  );
  const resultRaw = await response.text();
  const result = JSON.parse(resultRaw);
  return result.data;
}

export default class AnimalScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: null,
      data: null,
    };
  }

  componentWillMount() {
    const { navigation } = this.props;
    const { name } = navigation.state.params;
    getData(name).then(result => {
      const htmlContent = result.description
        .replace(name, 'Description')
        .replace('<img src="', '<img src="http://torontozoo.com');
      this.setState({ data: result, html: htmlContent });
    });
  }

  render() {
    const { html, data } = this.state;
    const { navigation } = this.props;
    const { name, image } = navigation.state.params;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerCenter}>
              <Image source={{ uri: image }} style={styles.image} />
              <Text style={styles.headerText}>{name}</Text>
            </View>
          </View>
          {data && (
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginBottom: 20,
              }}
            >
              <View style={{ marginRight: 20 }}>
                <Text style={styles.tag}>Type: </Text>
                <Text style={styles.tag}>Region: </Text>
              </View>
              <View>
                <Text style={styles.tagValue}>{data.type}</Text>
                <Text style={styles.tagValue}>{data.region}</Text>
              </View>
            </View>
          )}
          {html && <HtmlView html={html} />}
        </ScrollView>
      </View>
    );
  }
}
