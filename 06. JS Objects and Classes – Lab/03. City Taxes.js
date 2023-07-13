function createCityTaxesInfo(name, population, treasury) {
  return {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes: function () {
      Math.floor((this.treasury += this.population * this.taxRate));
    },
    applyGrowth: function (percentage) {
      Math.floor((this.population += this.population * (percentage / 100)));
    },
    applyRecession: function (percentage) {
      Math.floor((this.treasury -= this.treasury * percentage));
    },
  };
}

const city = createCityTaxesInfo("Tortuga", 7000, 15000);

city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);
