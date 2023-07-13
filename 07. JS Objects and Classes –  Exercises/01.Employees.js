function solve(inputArray) {
  for (const i of inputArray) {
    const x = createPerson(i, i.length);
    console.log(`Name: ${x.employeeName} -- Personal Number: ${x.personalNum}`);
  }
}

function createPerson(employeeName, personalNum) {
  const createPerson = {
    employeeName,
    personalNum,
  };
  return createPerson;
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
console.log(" ");
solve(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
