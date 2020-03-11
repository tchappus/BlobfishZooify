import React from 'react';
import { ScrollView, View } from 'react-native';

import Colors from '../constants/Colors';

import ListButton from '../components/ListButton';
import SearchBar from '../components/SearchBar';

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.torontoBackground,
  },
  header: {
    backgroundColor: 'white',
    height: 60,
    borderBottomColor: Colors.torontoGrey,
    borderBottomWidth: 2,
  },
};

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
        <View style={styles.header}>
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
