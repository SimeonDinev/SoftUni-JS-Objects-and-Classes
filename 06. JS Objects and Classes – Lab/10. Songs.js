function solve(input) {
  const songsCount = input.shift();
  const type = input.pop();

  for (let index = 0; index < songsCount; index++) {
    const element = input[index].split("_");
    const currentSongType = element[0];
    const name = element[1];

    if (type === currentSongType) {
      console.log(name);
    }
    if (type === "all") {
      console.log(name);
    }
  }
}

solve([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
