# Lesson 11 Classwork

Let's practice debugging!

Find the bugs!

## Spec

Create a simple web page for every exercise and fix the code.

### Print numbers 1-10

Expected Output: `"1 2 3 4 5 6 7 8 9 10"`

```html
<button id="printNumbersBtn">Print numbers 1-10</button>
```

```js
const printNumbersBtn = document.getElementById('printNumbersBtn');
printNumbersBtn.addEventListener('click', printNumbers);

function printNumbers() {
  var string = '';
  for (var i = 0; i < 12; i++) {
    string = string + i + ', ';
  }
  string = string.substring(0, string.length - 2);
  console.log(string);
}
```

### Count by 10's

Expected Output: `"[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]"`

```html
<button id="countBy10Btn">Count by 10's</button>
```

```js
const countBy10Btn = document.getElementById('countBy10Btn');
countBy10Btn.addEventListener('click', countBy10);

function countBy10() {
  let counter = 0;
  let index = 0;
  let arrayOf10s = [];
  while (counter <= 100) {
    arrayOf10s[index] = counter;
    index = index + 2;
    counter = counter + 5;
  }
  console.log(arrayOf10s);
}
```

### Debugging is Fun!

Expected Output: `"Debugging is fun"`

```html
<button id="debuggingIsFunBtn">Debugging is Fun!</button>
```

```js
const debuggingIsFunBtn = document.getElementById('debuggingIsFunBtn');
debuggingIsFunBtn.addEventListener('click', debuggingIsFun);

function debuggingIsFun() {
  //HINT: use the debugger to see the value of 'firstHalf' and 'secondHalf'
  const str = 'Debugging is hard but is fun!';
  const firstHalf = str.substring(2, 15);
  const secondHalf = str.substring(23, 28);
  const finalStr = firstHalf + secondHalf;
  console.log(finalStr);
}
```

### Reverse Number sorter

Expected Output: `"[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]"`

```html
<button id="reverseNumberBtn">Reverse Number sorter</button>
```

```js
const reverseNumberBtn = document.getElementById('reverseNumberBtn');
reverseNumberBtn.addEventListener('click', reverseNumberSorter);

function reverseNumberSorter() {
  //looks like the number sorter... But we want it to be a reverse number sorter
  let nums = [3, 6, 5, 4, 2, 8, 1, 10, 7, 9];
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while (j > 0 && nums[j - 1] > nums[j]) {
      let temp = nums[j];
      nums[j] = nums[j - 1];
      nums[j - 1] = temp;
      j--;
    }
  }
  console.log(nums);
}
```

### Max Number

Expected Output: `"45"`

```html
<button id="maxNumberBtn">Max Number</button>
```

```js
const maxNumberBtn = document.getElementById('maxNumberBtn');
maxNumberBtn.addEventListener('click', maxNumber);

function maxNumber() {
  //this function should print out the largest number in the array
  const nums = [
    4,
    32,
    41,
    23,
    10,
    4,
    36,
    24,
    29,
    35,
    38,
    40,
    12,
    33,
    42,
    26,
    27,
    19,
    20,
    2,
    43,
    41,
    34,
    38,
    39,
    45,
    42,
    41,
    34,
    23,
    26,
    40,
  ];
  let maxNumber = 50;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < maxNumber) {
      maxNumber = nums[i];
    }
  }
  console.log(maxNumber);
}
```
