const sentence = "hello there from lighthouse labs";
let timer = 950;
for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), timer += 50);
}
setTimeout(() => console.log(), timer + 50); // since 50 was incremented each time, we need to increment this final console.log by 50 in the setTimeout function


// Alternate way of solving problem below (using timer value as 1000 and reassigning it following the process.stdout)
/*
const sentence = "hello there from lighthouse labs";
let timer = 1000;
for (const char of sentence) {
   // do not set timer variable inside of loop as this will reassign the value
  setTimeout(() => process.stdout.write(char), timer);
    timer += 50;
  }
  setTimeout(() => console.log(), timer); // uses the 50 ms that was incremented at the end of the loop
*/
