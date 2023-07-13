function createPersonInfo(firstName, lastName, age) {
  const person = {
    firstName,
    lastName,
    age,
  };
  return person;
}

function printPerson(createPersonInfo) {
  Object.entries(createPersonInfo).forEach(function ([key, value]) {
    console.log(`${key}: ${value}`);
  });
}

const personInfo = createPersonInfo("Simeon", "Dinev", 22);
printPerson(personInfo);
