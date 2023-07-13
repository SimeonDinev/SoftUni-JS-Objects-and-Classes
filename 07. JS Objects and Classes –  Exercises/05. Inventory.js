function printHeroes(heroRepository) {
  heroRepository
    .sort(function (a, b) {
      return a.level - b.level;
    })
    .forEach((element) => {
      Object.entries(element).forEach(function ([key, value]) {
        if (key === "hero") {
          let x = key.charAt(0).toUpperCase();
          console.log(`${key.replace(key.charAt(0), x)}: ${value}`);
        } else {
          console.log(`${key} => ${value}`);
        }
      });
    });
}

function createInventory(input) {
  const heroRepository = [];

  input.reduce((acc, curr) => {
    const [hero, level, items] = curr.split(" / ");
    const currentHero = createHero(hero, Number(level), items);
    heroRepository.push(currentHero);
    return acc;
  }, {});

  printHeroes(heroRepository);
}

function createHero(hero, level, items) {
  return {
    hero,
    level,
    items,
  };
}
createInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

// createInventory([
//   "Batman / 2 / Banana, Gun",
//   "Superman / 18 / Sword",
//   "Poppy / 28 / Sentinel, Antara",
// ]);
