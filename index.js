// Dice roll from 1 to 6
// var n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// console.log(n);

prompt("What is your name? " );
prompt("What is their name? " );

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

// (loveScore === 100) ? alert("Your love score is 100% " + "You love each other like kanye loves kanye"): alert("Your love score is " + loveScore + "%");
if(loveScore > 70){
    alert("Your love score is 100% " + "You love each other like kanye loves kanye")
} else if(loveScore > 30 && loveScore <= 70){
    alert("Your love score is " + loveScore + "%");
} else {
    alert("Your love score is " + loveScore + "%" + " You go together like oil and water.");
}


