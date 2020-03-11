import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import HtmlView from '../components/HtmlView';
import * as Fetch from '../utils/Fetch';

import Fonts from '../constants/Fonts';
import Window from '../constants/Window';

const styles = {
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    width: Window.width,
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
  tagView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
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
};

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

    Fetch.theTeaAbout(name).then(result => {
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
            <View style={styles.tagView}>
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
