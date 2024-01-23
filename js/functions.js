const robot = () => Math.floor(Math.random() * 3) 
const user = () =>prompt('Rock: 0, Paper: 1, Scissors: 2')

const rps = ['rock', 'paper', 'Scissors']

const userResults = user();
const robotResults = robot(); 

console.log('robot =', rps[robotResults], 'vs', 'User =', rps[userResults]);

if (rps[userResults] === rps[robotResults]) {
    console.log("draw");
} else if (userResults == 0 && robotResults == 1) {
    console.log("Robots wins", rps[robotResults])
}  else if (userResults == 1 && robotResults == 2) {
    console.log("Robots wins", rps[robotResults])
} else if (userResults == 2 && robotResults == 0) {
    console.log("Robots wins", rps[robotResults])
} else {
    console.log("User wins", rps[userResults])
}