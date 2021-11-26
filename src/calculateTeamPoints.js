// Given an array of players
// returns a sorted array of teams with the total team points for active players.
// The output is sorted in descending order by points
// input: [{ team: 'green', name: 'Bob', points: 5, isActive: true }, ...]
// output: [{ team: 'green', points: 40 }, ...]

module.exports = (players) => {
  let arr = [];
  let red = 0;
  let green = 0;
  let blue = 0;

  for(let i = 0; i < players.length; i++){
    if(players[i].isActive){
      if(players[i].team === 'red') red += players[i].points;
      else if(players[i].team === 'green') green += players[i].points;
      else if(players[i].team === 'blue') blue += players[i].points;
    }
  }

  const teamRed = {
    team: 'red',
    points: red
  };
  const teamGreen = {
    team: 'green',
    points: green
  };
  const teamBlue = {
    team: 'blue',
    points: blue
  };

  arr.push(teamRed);
  arr.push(teamGreen);
  arr.push(teamBlue);

  const output = arr.sort((a,b) => {
    if(a.points > b.points) return -1;
    if(a.points < b.points) return 1;
    return 1;
  });
  
  return output;
}
