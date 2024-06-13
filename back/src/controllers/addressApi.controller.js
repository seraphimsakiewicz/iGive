const axios = require('axios').default;

async function getCitiesFromApi(req, res) {
  try {
    const { cityInput } = req.body;

    const url = encodeURI(
      `https://kladr-api.ru/api.php?query=${cityInput}&contentType=city`
    );
    const { result } = (await axios.get(url)).data;
    const arrOfCities = result.slice(1);
    res.json(arrOfCities);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function getStreetsFromApi(req, res) {
  try {
    const { street, cityId } = req.body;
    const url = encodeURI(
      `https://kladr-api.ru/api.php?query=${street}&contentType=street&cityId=${cityId}`
    );
    const { result } = (await axios.get(url)).data;
    const arrOfStreets = result.slice(1);
    res.json(arrOfStreets);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function getBuildingsFromApi(req, res) {
  try {
    const { building, cityId, streetId } = req.body;
    const url = encodeURI(
      `https://kladr-api.ru/api.php?query=${building}&contentType=building&cityId=${cityId}&streetId=${streetId}`
    );
    const { result } = (await axios.get(url)).data;
    const arrOfBuilding = result.slice(1);
    res.json(arrOfBuilding);
  } catch (error) {
    res.sendStatus(500);
  }
}

module.exports = { getCitiesFromApi, getStreetsFromApi, getBuildingsFromApi };
