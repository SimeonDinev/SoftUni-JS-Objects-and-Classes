function createObject(firstName, lastName, hairColor) {
  const person = {
    firstName,
    lastName,
    hairColor,
  };
  console.log(JSON.stringify(person));
}

createObject("George", "Jones", "Brown");
createObject("Peter", "Smith", "Blond");
