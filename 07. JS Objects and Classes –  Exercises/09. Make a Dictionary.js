function solve(inputJSON) {
  let dictionary = {};

  const x = inputJSON.forEach((element) => {
    const obj = JSON.parse(element);
    dictionary = Object.assign(dictionary, obj);
  });

  Object.keys(dictionary)
    .sort()
    .forEach((key) => {
      console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
    });
}

solve([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations )which may then be amplified, transmitted, or recorded."}',
]);
