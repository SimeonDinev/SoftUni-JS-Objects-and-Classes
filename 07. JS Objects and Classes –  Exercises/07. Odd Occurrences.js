function solve(input) {
  const result = [];

  const obj = input
    .toLowerCase()
    .split(" ")
    .reduce((acc, curr) => {
      if (!acc.hasOwnProperty(curr)) {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }
      return acc;
    }, {});

  Object.entries(obj).forEach(function ([key, value]) {
    if (value % 2 !== 0) {
      result.push(key);
    }
  });

  console.log(result.sort().join(" "));
}
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
solve("Cake IS SWEET is Soft CAKE sweet Food");

//Object.entries(obj).forEach(([key, value]) => {
//     if (key) {
//       console.log("yes");
//     }
//   });
