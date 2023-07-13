function solve(input) {
  const [searchedWords, ...words] = input;

  const obj = searchedWords.split(" ").reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});

  words.forEach((element) => {
    if (obj.hasOwnProperty(element)) {
      obj[element] += 1;
    }
  });
  //const a = obj.sortByValue;

  Object.entries(obj)
    .sort((a, b) => {
      const valueA = Object.values(a)[0]; // Get the value of the first property dynamically
      const valueB = Object.values(b)[0]; // Get the value of the first property dynamically

      return valueA - valueB;
    })
    .forEach(function ([key, value]) {
      console.log(`${key} - ${value}`);
    });
}

const sortByValue = (obj) => {
  return obj.sort((a, b) => {
    const valueA = Object.values(a)[0];
    const valueB = Object.values(b)[0];
    return valueA - valueB;
  });
};
solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
solve([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
