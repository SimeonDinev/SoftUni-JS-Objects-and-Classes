function solve(input) {
  const canceledOutput = [];
  const readyToFlyOutput = [];

  const firstArray = input[0];
  const secondArray = input[1];
  const thirdArray = input[2];

  const obj = firstArray.reduce((acc, curr) => {
    const [flightNumber, city] = splitByFirstWhiteSpace(curr);
    acc[flightNumber] = city;
    return acc;
  }, {});

  const obj2 = secondArray.reduce((acc, curr) => {
    const [flightNumber, status] = curr.split(" ");
    acc[flightNumber] = status;
    return acc;
  }, {});

  Object.entries(obj).forEach(function ([key, value]) {
    if (obj2.hasOwnProperty(key) && Object.values(obj2).includes("Cancelled")) {
      canceledOutput.push(createObj(value, "Cancelled"));
    } else {
      readyToFlyOutput.push(createObj(value, "Ready to fly"));
    }
  });

  if (thirdArray.includes("Cancelled")) {
    canceledOutput.forEach((x) => {
      console.log(x);
    });
  } else if (thirdArray.includes("Ready to fly")) {
    readyToFlyOutput.forEach((x) => {
      console.log(x);
    });
  }
}

function splitByFirstWhiteSpace(str) {
  const firstSpaceIndex = str.indexOf(" ");

  if (firstSpaceIndex !== -1) {
    const firstPart = str.slice(0, firstSpaceIndex);
    const secondPart = str.slice(firstSpaceIndex + 1);
    return [firstPart, secondPart];
  } else {
    return [str, ""];
  }
}

function createObj(destination, status) {
  return {
    Destination: destination,
    Status: status,
  };
}

// solve([
//   [
//     "WN269 Delaware",
//     "FL2269 Oregon",
//     "WN498 Las Vegas",
//     "WN3145 Ohio",
//     "WN612 Alabama",
//     "WN4010 New York",
//     "WN1173 California",
//     "DL2120 Texas",
//     "KL5744 Illinois",
//     "WN678 Pennsylvania",
//   ],
//   [
//     "DL2120 Cancelled",
//     "WN612 Cancelled",
//     "WN1173 Cancelled",
//     "SK430 Cancelled",
//   ],
//   ["Cancelled"],
// ]);
solve([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);