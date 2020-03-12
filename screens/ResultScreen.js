import React from 'react';
import { View, Text, Image } from 'react-native';

import BfButton from '../components/BfButton';

import Fonts from '../constants/Fonts';
import Window from '../constants/Window';

const styles = {
  image: {
    width: '60%',
    height: '60%',
    borderRadius: 40,
    marginBottom: 20,
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 30,
  },
  innerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: Fonts.bold,
    fontSize: 36,
    letterSpacing: -1,
    marginBottom: 12,
  },
  regularText: {
    fontFamily: Fonts.regular,
    fontSize: 36,
    letterSpacing: -1,
    marginBottom: 12,
  },
  buttonOverlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 90,
  },
  button: {
    width: Window.width / 2 - 40,
  },
};

export default class ResultScreen extends React.Component {
  static findMatch(result, dictionary) {
    for (const key in dictionary) {
      for (const animal in dictionary[key]) {
        if (animal.includes(result)) {
          return { animal: dictionary[key] };
        }
      }
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      animal: null,
      image: null,
    };
  }

  componentWillMount() {
    const { screenProps, navigation } = this.props;
    const { animals } = screenProps;
    const result = navigation.getParam('result');
    let animal = null;
    let image = null;
    for (const key in animals) {
      for (const value in animals[key]) {
        if (
          value
            .replace(/\s/g, '')
            .toUpperCase()
            .includes(result.split(',')[0].toUpperCase())
        ) {
          animal = value;
          image = animals[key][value];
        }
      }
    }
    this.setState({ animal, image });
  }

  render() {
    const { animal, image } = this.state;
    const { navigation } = this.props;
    const uri = navigation.getParam('uri');

    return (
      <View style={styles.view}>
        <View style={styles.innerView}>
          <Image source={{ uri }} style={styles.image} resizeMode="cover" />
          <Text style={styles.regularText}>Identified Specimen:</Text>
          {animal && <Text style={styles.headerText}>{animal}</Text>}
        </View>
        <View style={styles.buttonOverlay}>
          <BfButton
            icon="ios-camera"
            label="Back to Camera"
            style={styles.button}
            onPress={() => {
              navigation.navigate('Camera');
            }}
          />
          <BfButton
            icon="ios-compass"
            label="Discover"
            style={styles.button}
            onPress={() => {
              navigation.navigate('Animal', {
                name: animal,
                discover: true,
                showBack: true,
                image: `http://torontozoo.com${image}`,
              });
            }}
          />
        </View>
      </View>
    );
  }
}
