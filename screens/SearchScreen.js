/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import Layout from '../constants/Layout';

import ListButton from '../components/ListButton';
import SearchBar from '../components/SearchBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.torontoBackground,
  },
  header: {
    flexDirection: 'row',
    height: 120,
    width: Layout.window.width,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: Fonts.fun,
    fontSize: 36,
    letterSpacing: -1,
    lineHeight: 36,
    alignSelf: 'center',
  },
  headerCenter: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 55,
    width: 55,
    marginTop: 20,
    marginBottom: 5,
  },
});

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.updateResults = this.updateResults.bind(this);
    this.state = {
      results: null,
      allAnimals: null,
    };
  }

  componentWillMount() {
    const { screenProps } = this.props;
    const dictionary = screenProps;
    const results = [];
    for (const key in dictionary) {
      for (const animal in dictionary[key]) {
        results.push({ name: animal, image: dictionary[key][animal] });
      }
    }
    this.setState({ results });
    this.setState({ allAnimals: results });
  }

  updateResults(query) {
    const { allAnimals } = this.state;
    if (allAnimals) {
      const results = allAnimals.filter(animal =>
        animal.name.toUpperCase().includes(query.toUpperCase()),
      );
      this.setState({ results });
    }
  }

  render() {
    const { navigation } = this.props;
    const { results } = this.state;

    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: 'white',
            height: 60,
            borderBottomColor: Colors.torontoGrey,
            borderBottomWidth: 2,
          }}
        >
          <SearchBar onChange={this.updateResults} />
        </View>
        <ScrollView style={styles.container}>
          {results && (
            <View style={{ paddingBottom: 40 }}>
              {results.map(result => {
                const imgUrl = `http://torontozoo.com${result.image}`;
                return (
                  <ListButton
                    key={result.name}
                    name={result.name}
                    imgUrl={imgUrl}
                    onPress={() => {
                      navigation.navigate('Animal', {
                        navigation,
                        image: imgUrl,
                        name: result.name,
                      });
                    }}
                  />
                );
              })}
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}
