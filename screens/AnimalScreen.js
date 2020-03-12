import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import BfButton from '../components/BfButton';
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
    width: Window.width - 60,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
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
    marginHorizontal: 30,
    maxWidth: Window.width - 60,
  },
  tag: {
    marginBottom: 10,
    fontFamily: Fonts.bold,
    fontSize: 18,
  },
  tagValue: {
    marginBottom: 10,
    paddingRight: 30,
    fontFamily: Fonts.regular,
    fontSize: 18,
  },
  button: {
    height: 70,
    marginBottom: 10,
    marginHorizontal: 30,
  },
};

export default class AnimalScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: null,
      data: null,
      thisIsDiscovered: false,
    };
  }

  componentWillMount() {
    const { screenProps, navigation } = this.props;
    const { name } = navigation.state.params;
    const { discovered } = screenProps;

    Fetch.theTeaAbout(name).then(result => {
      const htmlContent = `${result.description
        .replace(name, 'Description')
        .replace(
          '<img src="',
          '<img src="http://torontozoo.com',
        )}<div>Information provided by the Toronto Zoo.<br /></div>`;

      this.setState({ data: result, html: htmlContent });
    });

    for (const animal in discovered) {
      if (animal === name) {
        this.setState({ thisIsDiscovered: true });
      }
    }
  }

  render() {
    const { html, data, thisIsDiscovered } = this.state;
    const { screenProps, navigation } = this.props;
    const { name, image, discover, showBack } = navigation.state.params;
    const { addToDiscovered } = screenProps;

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          minimumZoomScale={1}
          maximumZoomScale={5}
        >
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
          {discover && !thisIsDiscovered && (
            <View style={styles.button}>
              <BfButton
                icon="ios-compass"
                label="Mark as Discovered"
                style={styles.button}
                onPress={() => {
                  this.setState({ thisIsDiscovered: true });
                  addToDiscovered(name, image);
                }}
              />
            </View>
          )}
          {thisIsDiscovered && (
            <View style={styles.button}>
              <BfButton
                disabled
                icon="ios-compass"
                label="Discovered"
                style={styles.button}
                onPress={() => {}}
              />
            </View>
          )}
          {showBack && (
            <View style={styles.button}>
              <BfButton
                icon="ios-camera"
                label="Back to Camera"
                style={styles.button}
                onPress={() => {
                  navigation.navigate('Camera');
                }}
              />
            </View>
          )}
          {html && <HtmlView html={html} />}
        </ScrollView>
      </View>
    );
  }
}
