function solve(input) {
  const obj = input.reduce((acc, curr) => {
    const [direction, carNumber] = curr.split(", ");

    if (!acc.hasOwnProperty(carNumber) && direction === "IN") {
      acc[carNumber] = direction;
    }
    if (acc.hasOwnProperty(carNumber) && direction === "OUT") {
      delete acc[carNumber];
    }

    return acc;
  }, {});

  if (Object.keys(obj).length === 0) {
    return console.log("Parking Lot is Empty");
  } else {
    Object.keys(obj)
      .sort(sorting)
      .forEach((key) => {
        console.log(key);
      });
  }
}

function sorting(a, b) {
  const valueA = a.substring(2, 5);
  const valueB = b.substring(2, 5);
  if (valueA < valueB) {
    return -1;
  }
  if (valueB < valueA) {
    return 1;
  }
  return 0;
}
solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
