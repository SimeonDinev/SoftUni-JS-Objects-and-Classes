function createJSON(string) {
  const objecta = JSON.parse(string);
  Object.entries(objecta).forEach(function ([key, value]) {
    console.log(`${key}: ${value}`);
  });
  return objecta;
}

createJSON('{"name": "George", "age": 40, "town": "Sofia"}');
console.log(" ");
createJSON('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
stringArray;
