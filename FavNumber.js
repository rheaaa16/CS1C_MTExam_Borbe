let FavNum = 16;
let correct = false;

while (!correct) {
    var guessNumber = parseInt(prompt("Can you guess my favorite number?"), 8);

    if (guessNumber < FavNum) {
        console.log("Too Low!");
    } else if (guessNumber > FavNum) {
        console.log("Too High!");
    } else {
        console.log("Correct!");
    }
}
