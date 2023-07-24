var output = [];
let counter = 1;

function fizzBuzz() {
  while (counter <= 100) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      output.push("FizzBuzz");
    } else if (counter % 5 === 0) {
      output.push("Buzz");
    } else if (counter % 3 === 0) {
      output.push("Fizz");
    } else {
      output.push(counter);
    }
    counter += 1;
  }
  console.log(output);
}

fizzBuzz();