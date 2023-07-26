function solve(objInput, stringArrayInput) {
  stringArrayInput.forEach((element) => {
    const [command, app] = element.split(" ");

    if (command === "Open") {
      objInput["Open Tabs"].push(app);

      objInput["Recently Closed"].forEach((i) => {
        if (i === app) {
          let a = objInput["Recently Closed"].indexOf(app);
          objInput["Recently Closed"].splice(a, 1);
        }
      });

      objInput["Browser Logs"].push(element);
    } else if (command === "Close") {
      objInput["Recently Closed"].push(app);

      objInput["Open Tabs"].forEach((i) => {
        if (i === app) {
          let a = objInput["Open Tabs"].indexOf(app);
          objInput["Open Tabs"].splice(a, 1);
        }
      });

      objInput["Browser Logs"].push(element);
    } else if (command === "Clear") {
      objInput["Open Tabs"] = [];
      objInput["Browser Logs"] = [];
      objInput["Recently Closed"] = [];
    }
  });

  console.log(objInput["Browser Name"]);
  console.log(`Open Tabs: ${objInput["Open Tabs"].join(", ")}`);
  console.log(`Recently Closed: ${objInput["Recently Closed"].join(", ")}`);
  console.log(`Browser Logs: ${objInput["Browser Logs"].join(", ")}`);
}

solve(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
