// function createPhoneBook(stringArray) {
//   const phoneBook = {};

//   for (const line of stringArray) {
//     let arr = line.split(" ");
//     let name = arr[0];
//     let phoneNumber = arr[1];

//     phoneBook[name] = phoneNumber;
//   }

//   for (const key in phoneBook) {
//     console.log(`${key} -> ${phoneBook[key]}`);
//   }
// }

function createPhoneBook(stringArray) {
  const phoneObject = stringArray.reduce((acc, curr) => {
    const [name, phone] = curr.split(" ");
    acc[name] = phone;
    return acc;
  }, {});

  Object.keys(phoneObject).forEach((key) => {
    console.log(`${key} -> ${phoneObject[key]}`);
  });
}

createPhoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
