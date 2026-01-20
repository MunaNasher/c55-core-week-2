import promptSync from 'prompt-sync';
const prompt = promptSync();

let year = prompt("Enter a year:");

// convert the input to number
year = Number(year);

// check the input vaildation 
if (isNaN(year) || year < 1 || year > 9999) {
  console.log("Invalid year!");
} else {
  
  // leap year
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Yes, " + year + " is a leap year");
  } else {
    console.log("No, " + year + " is not a leap year");
  }
}
