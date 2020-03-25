import * as Fetch from '../utils/Fetch';
import grizzlyBear from './reference/grizzlyBear';
import canadianAnimals from './reference/canadianAnimals';

global.fetch = require('node-fetch');

const assert = require('assert');
const FormData = require('form-data');
const fs = require('fs');

describe('Fetch', () => {
  describe(`theTeaAbout('Grizzly Bear')`, () => {
    it('should return data that matches the reference data', async () => {
      const data = await Fetch.theTeaAbout('Grizzly Bear');
      assert.equal(data.description, grizzlyBear.description);
      assert.equal(data.type, grizzlyBear.type);
      assert.equal(data.region, grizzlyBear.region);
    });
  });

  describe(`theZooAnimalsIn('canada')`, () => {
    it('should return data that matches the reference data', async () => {
      const data = await Fetch.theZooAnimalsIn('canada');
      assert.equal(data, canadianAnimals);
    });
  });

  describe(`theAnimalsThatIsInThis(picture)`, () => {
    it('should return the correct animal', async () => {
      const formData = new FormData();
      formData.append(
        'image',
        fs.createReadStream('./test/reference/photo.jpg'),
      );
      const data = await Fetch.theAnimalThatIsInThis(formData);
      assert.equal(data.split(',')[0], 'americanMoose');
    });
  });
});
