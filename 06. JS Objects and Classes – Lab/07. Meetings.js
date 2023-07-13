function createAddressBook(stringInput) {
  const obj = stringInput.reduce((acc, curr) => {
    const [day, name] = curr.split(" ");

    if (acc.hasOwnProperty(day)) {
      console.log(`Conflict for ${day}`);
    } else {
      acc[day] = name;
      console.log(`Scheduled for ${day}`);
    }

    return acc;
  }, {});

  //   Object.entries(obj).forEach(function ([key, value]) {
  //     console.log(`${key} -> ${value}`);
  //   });

  for (const key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}
createAddressBook([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
