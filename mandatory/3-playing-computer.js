/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  2. Remove the line that throws the error.
  3. What is printed to the console?
  4. How many times is "f1" called?
  5. How many times is "f2" called?
  6. What value does the "a" parameter take in the first "f1" call?
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);
    console.log(e);
  }
}

/*
  1. Because b isn't defined
  2. Removed, it was console.log(b)
  3. Numbers, if to be exact, these are 2, 6, 4, 9, 6, 13, 8, where first two are console.logs before loop,
    and other five are loops, where i comes from 0 to 4.
  4. 2 times, because i = 1, 3
  5. 3 times, because i = 0, 2, 4
  6. In the first f1 i = 1 and a = 8;
  7. If we're laking about first let a = 6, it'll stay like that, and won't be changed.
*/