async function theZooAnimalsIn(location) {
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

async function theTeaAbout(animal) {
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

async function theAnimalThatIsInThis(picture) {
  const response = await fetch(
    'http://ec2-13-58-200-200.us-east-2.compute.amazonaws.com',
    {
      method: 'POST',
      mode: 'cors',
      body: picture,
    },
  );

  const result = await response.text();
  return result;
}

export { theZooAnimalsIn, theTeaAbout, theAnimalThatIsInThis };
