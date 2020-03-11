/* eslint-disable react/prop-types */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import { View, Text, Image } from 'react-native';
import Fonts from '../constants/Fonts';
import BfButton from '../components/BfButton';

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
    justifyContent: 'center',
    paddingHorizontal: 30,
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
    const result = navigation.getParam('result');
    let animal = null;
    let image = null;
    for (const key in screenProps) {
      for (const value in screenProps[key]) {
        if (
          value
            .replace(/\s/g, '')
            .toUpperCase()
            .includes(result.toUpperCase())
        ) {
          animal = value;
          image = screenProps[key][value];
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
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
        <Text style={styles.regularText}>Identified Specimen:</Text>
        {animal && <Text style={styles.headerText}>{animal}</Text>}
        <BfButton
          icon="ios-information-circle"
          label="Learn More"
          onPress={() => {
            navigation.navigate('Animal', {
              name: animal,
              image: `http://torontozoo.com${image}`,
            });
          }}
        />
      </View>
    );
  }
}
