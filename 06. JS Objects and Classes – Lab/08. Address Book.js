function createAdressBook(stringInput) {
  const obj = stringInput.reduce((acc, curr) => {
    const [name, street] = curr.split(":");
    acc[name] = street;

    return acc;
  }, {});

  let x = Object.entries(obj)
    .sort()
    .forEach(function ([key, value]) {
      console.log(`${key} -> ${value}`);
    });
}

createAdressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);

console.log(" ");

createAdressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
