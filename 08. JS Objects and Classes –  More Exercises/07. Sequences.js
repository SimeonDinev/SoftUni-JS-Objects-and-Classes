function solve(input) {
  let output = [];

  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    const currArray = JSON.parse(element).sort(function (a, b) {
      return b - a;
    });

    checkForAddingToOutput(output, currArray);
  }

  output
    .sort(function (a, b) {
      return a.length - b.length;
    })
    .forEach((x) => {
      console.log(`[${x.join(", ")}]`);
    });
}

function checkForAddingToOutput(output, currArray) {
  let bool = false;
  if (output.length === 0) {
    output.push(currArray);
    bool = true;
  } else {
    output.forEach((x) => {
      let a = JSON.stringify(x);
      let b = JSON.stringify(currArray);
      if (a === b) {
        bool = true;
      }
    });
  }

  if (bool === false) {
    output.push(currArray);
  }
}

solve([
  "[-3, -2, -1, 0, 1, 2, 3, 4]",
  "[10, 1, -17, 0, 2, 13]",
  "[4, -3, 3, -2, 2, -1, 1, 0]",
]);

// const arr = input.reduce((acc, curr) => {
//   const a = JSON.parse(curr).sort(function (a, b) {
//     return b - a;
//   });
//   checkIfArrayDuplicate(acc, a);
//   if (checkIfArrayDuplicate(acc, a)) {
//   } else {
//     acc.push(a);
//   }

//   return acc;
// }, []);

//   input.forEach((array) => {
//     let x = JSON.parse(array).sort(function (a, b) {
//       return b - a;
//     });

//     if (JSON.stringify(x) === JSON.stringify(array)) {
//     } else {
//       output.push(x);
//     }
//   });
//   console.log(output.join(",\n"));
