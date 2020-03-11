import * as Fetch from './Fetch';

import ExhibitsAtTheTorontoZoo from '../constants/ZooExhibits';

async function getTheZooAnimalsIn(location, exhibits) {
  const animalsResponse = await Fetch.theZooAnimalsIn(location);
  const animals = animalsResponse[0];
  const images = animalsResponse[1];

  // sanitize
  for (const exhibit of exhibits) {
    const index = animals.indexOf(exhibit);
    if (index > -1) {
      animals.splice(index, 1);
    }
  }

  const animalsAndImages = {};

  for (let i = 0; i < animals.length; i += 1) {
    animalsAndImages[animals[i]] = images[i];
  }

  return animalsAndImages;
}

export default async function GetTheAnimals() {
  const animals = {};

  for (const location in ExhibitsAtTheTorontoZoo) {
    // eslint-disable-next-line no-await-in-loop
    animals[location] = await getTheZooAnimalsIn(
      location,
      ExhibitsAtTheTorontoZoo[location],
    );
  }

  return animals;
}
