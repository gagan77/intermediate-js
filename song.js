// let beer = 99;

// while(beer !== 1) {
//     console.log(`${beer} bottles of beer on the wall, ${beer - 1} bottles of beer, Take 1 down, pass it around, ${beer - 2} bottle of beer on the wall` );
//     beer -= 1;
// }
// console.log(`${beer} bottles of beer on the wall, ${beer - 1} bottles of beer, Take 1 down, pass it around, no more bottles of beer on the wall` );
// console.log(`No more bottles of beer on the wall, no more bottles of beer, Go to the store and buy some more, 99 bottles of beer on the wall`);

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}