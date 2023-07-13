function solve(input) {
  const obj = input
    .map((city) => {
      const [town, latitude, longitude] = city.split(" | ");
      return { town, latitude, longitude };
    })
    .forEach((e) => {
      console.log(e);
    });
}

solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
