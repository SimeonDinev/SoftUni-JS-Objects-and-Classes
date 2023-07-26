function garageCreator(input) {
  const obj = input.reduce((acc, curr) => {
    const currentArray = curr.split(", ");
    const [garage, prop] = currentArray[0].split(" - ");
    currentArray[0] = prop;

    if (!acc.hasOwnProperty(garage)) {
      acc[garage] = [];
    }
    acc[garage].push(String(currentArray));

    return acc;
  }, {});

  Object.entries(obj).forEach(function ([key, value]) {
    console.log(
      `Garage № ${key}\n--- ${value
        .join("\n--- ")
        .replaceAll(": ", " - ")
        .replaceAll(",", ", ")}`
    );
  });
}
garageCreator([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
