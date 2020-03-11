async function getData(location) {
  const response = await fetch(
    `https://wrapapi.com/use/rchappus/blobfish/getZooLocation/latest?wrapAPIKey=D19qDTvra80XtAYgct5KqOdPy8cSohF0&location=${location}`,
    {
      method: 'GET',
      mode: 'cors',
    },
  );
  const resultRaw = await response.text();
  const result = JSON.parse(resultRaw);
  const animalsRegex = /[-A-Za-z,"'()]+[-A-Za-z,"' ()]+/g;
  return [result.data.output.match(animalsRegex), result.data.images];
}

export default async function LoadData() {
  const animals = {};

  // canada
  const canadaAnimalsResponse = await getData('canada');
  const canadaAnimals = canadaAnimalsResponse[0];
  const canadaAnimalsImages = canadaAnimalsResponse[1];

  // sanitize
  let index = canadaAnimals.indexOf('Canadian Domain');
  if (index > -1) {
    canadaAnimals.splice(index, 1);
  }

  // create object
  animals.canada = {};

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < canadaAnimals.length; i++) {
    animals.canada[canadaAnimals[i]] = canadaAnimalsImages[i];
  }

  // africa
  const africaAnimalsResponse = await getData('africa');
  const africaAnimals = africaAnimalsResponse[0];
  const africaAnimalsImages = africaAnimalsResponse[1];

  // sanitize
  index = africaAnimals.indexOf('African Rainforest Pavilion');
  if (index > -1) {
    africaAnimals.splice(index, 1);
  }

  index = africaAnimals.indexOf('African Savanna');
  if (index > -1) {
    africaAnimals.splice(index, 1);
  }

  // create object
  animals.africa = {};

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < africaAnimals.length; i++) {
    animals.africa[africaAnimals[i]] = africaAnimalsImages[i];
  }

  // americas
  const americasAnimalsResponse = await getData('americas');
  const americasAnimals = americasAnimalsResponse[0];
  const americasAnimalsImages = americasAnimalsResponse[1];

  // sanitize
  index = americasAnimals.indexOf('Americas Pavilion');
  if (index > -1) {
    americasAnimals.splice(index, 1);
  }

  index = americasAnimals.indexOf('Mayan Temple Ruins');
  if (index > -1) {
    americasAnimals.splice(index, 1);
  }

  // create object
  animals.americas = {};

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < americasAnimals.length; i++) {
    animals.americas[americasAnimals[i]] = americasAnimalsImages[i];
  }

  // australasia
  const australasiaAnimalsResponse = await getData('australasia');
  const australasiaAnimals = australasiaAnimalsResponse[0];
  const australasiaAnimalsImages = australasiaAnimalsResponse[1];

  // sanitize
  index = australasiaAnimals.indexOf('Australasia Pavilion');
  if (index > -1) {
    australasiaAnimals.splice(index, 1);
  }

  index = australasiaAnimals.indexOf('Australasia Outdoor');
  if (index > -1) {
    australasiaAnimals.splice(index, 1);
  }

  // create object
  animals.australasia = {};

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < australasiaAnimals.length; i++) {
    animals.australasia[australasiaAnimals[i]] = australasiaAnimalsImages[i];
  }

  // discovery
  const discoveryAnimalsResponse = await getData('discovery');
  const discoveryAnimals = discoveryAnimalsResponse[0];
  const discoveryAnimalsImages = discoveryAnimalsResponse[1];

  // sanitize
  index = discoveryAnimals.indexOf('Waterside Theatre');
  if (index > -1) {
    discoveryAnimals.splice(index, 1);
  }

  index = discoveryAnimals.indexOf('Kids Zoo');
  if (index > -1) {
    discoveryAnimals.splice(index, 1);
  }

  // create object
  animals.discovery = {};

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < discoveryAnimals.length; i++) {
    animals.discovery[discoveryAnimals[i]] = discoveryAnimalsImages[i];
  }

  // eurasia
  const eurasiaAnimalsResponse = await getData('eurasia');
  const eurasiaAnimals = eurasiaAnimalsResponse[0];
  const eurasiaAnimalsImages = eurasiaAnimalsResponse[1];

  // sanitize
  index = eurasiaAnimals.indexOf('Eurasia Wilds');
  if (index > -1) {
    eurasiaAnimals.splice(index, 1);
  }

  // create object
  animals.eurasia = {};

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < eurasiaAnimals.length; i++) {
    animals.eurasia[eurasiaAnimals[i]] = eurasiaAnimalsImages[i];
  }

  // indo-malaya
  const indomalayaAnimalsResponse = await getData('indo-malaya');
  const indomalayaAnimals = indomalayaAnimalsResponse[0];
  const indomalayaAnimalsImages = indomalayaAnimalsResponse[1];

  // sanitize
  index = indomalayaAnimals.indexOf('Indo-Malaya Pavilion');
  if (index > -1) {
    indomalayaAnimals.splice(index, 1);
  }

  index = indomalayaAnimals.indexOf('Indo-Malaya Outdoor');
  if (index > -1) {
    indomalayaAnimals.splice(index, 1);
  }

  index = indomalayaAnimals.indexOf('Malayan Woods Pavilion');
  if (index > -1) {
    indomalayaAnimals.splice(index, 1);
  }

  // create object
  animals.indomalaya = {};

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < indomalayaAnimals.length; i++) {
    animals.indomalaya[indomalayaAnimals[i]] = indomalayaAnimalsImages[i];
  }

  // tundra
  const tundraAnimalsResponse = await getData('tundra');
  const tundraAnimals = tundraAnimalsResponse[0];
  const tundraAnimalsImages = tundraAnimalsResponse[1];

  // sanitize
  index = tundraAnimals.indexOf('Tundra Trek');
  if (index > -1) {
    tundraAnimals.splice(index, 1);
  }

  // create object
  animals.tundra = {};

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < tundraAnimals.length; i++) {
    animals.tundra[tundraAnimals[i]] = tundraAnimalsImages[i];
  }

  return animals;
}
