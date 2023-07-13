function createCityInfo(name, area, population, country, postcode) {
  return { name, area, population, country, postcode };
}

function printCityInfo(createCityInfo) {
  Object.entries(createCityInfo).forEach(function ([key, value]) {
    console.log(`${key} -> ${value}`);
  });
}

const cityInfo = createCityInfo("Nova Zagora", 1221, 17500, "Bulgaria", "8900");
printCityInfo(cityInfo);
