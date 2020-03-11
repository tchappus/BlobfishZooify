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
  const uriParts = picture.split('.');
  const fileType = uriParts[uriParts.length - 1];
  const image = {
    picture,
    type: `image/${fileType}`,
    name: `photo.${fileType}`,
  };

  const formData = new FormData();
  formData.append('image', image);

  const response = await fetch(
    'https://zooify20200130112611.azurewebsites.net/api/values',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    },
  );

  const result = await response.text();
  return result;
}

export { theZooAnimalsIn, theTeaAbout, theAnimalThatIsInThis };
