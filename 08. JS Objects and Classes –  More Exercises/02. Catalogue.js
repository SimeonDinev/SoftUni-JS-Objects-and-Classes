function solve(input) {
  const obj = input.reduce((acc, curr) => {
    const [productName, productPrice] = curr.split(" : ");
    acc[productName] = productPrice;
    return acc;
  }, {});

  let currentMarker = [];

  Object.keys(obj)
    .sort()
    .forEach((x) => {
      if (!currentMarker.includes(x[0])) {
        currentMarker.push(x[0]);
        console.log(x[0]);
        console.log(" " + x + ": " + obj[x]);
      } else {
        console.log(" " + x + ": " + obj[x]);
      }
    });
}

solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

solve(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);
