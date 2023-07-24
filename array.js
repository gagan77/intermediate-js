var guestList = ["Gagan", "Sid", "Aam", "Sal","Slf","Moch"];
var guestName = prompt("Enter your name");

if(guestList.includes(guestName)){
    alert("Welcome to the party " + guestName);
} else {
    alert("Please wait 5 minutes, Cops are coming!");
}