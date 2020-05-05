# Lesson 10 Classwork

Let's practice debugging!

Find the bugs!

## Spec

Create a simple web page for every exercise and fix the code.

### Print numbers 1-10

Expected Output: `"1 2 3 4 5 6 7 8 9 10"`

```html
<button onclick="button1()">Print numbers 1-10</button>
```

```js
function button1() {
  var string = ''
  for (var i = 0; i < 12; i++) {
    string = string + i + ', '
  }
  string = string.substring(0, string.length - 2)
  console.log(string)
}
```

### Count by 10's

Expected Output: `"[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]"`

```html
<button onclick="button2()">Count by 10's</button>
```

```js
function button2() {
  var counter = 0
  var index = 0
  var arrayOf10s = []
  while (counter <= 100) {
    arrayOf10s[index] = counter
    index = index + 2
    counter = counter + 5
  }
  console.log(arrayOf10s)
}
```

### Debugging is Fun!

Expected Output: `"Debugging is fun"`

```html
<button onclick="button3()">Debugging is Fun!</button>
```

```js
function button3() {
  //HINT: use the debugger to see the value of 'firstHalf' and 'secondHalf'
  var str = 'Debugging is hard but is fun!'
  var firstHalf = str.substring(2, 15)
  var secondHalf = str.substring(23, 28)
  var finalStr = firstHalf + secondHalf
  console.log(finalStr)
}
```

### Reverse Number sorter

Expected Output: `"[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]"`

```html
<button onclick="button4()">Reverse Number sorter</button>
```

```js
function button4() {
  //looks like the number sorter... But we want it to be a reverse number sorter
  var nums = [3, 6, 5, 4, 2, 8, 1, 10, 7, 9]
  for (var i = 1; i < nums.length; i++) {
    var j = i
    while (j > 0 && nums[j - 1] > nums[j]) {
      var temp = nums[j]
      nums[j] = nums[j - 1]
      nums[j - 1] = temp
      j--
    }
  }
  console.log(nums)
}
```

### Max Number

Expected Output: `"45"`

```html
<button onclick="button5()">Max Number</button>
```

```js
function button5() {
  //this function should print out the largest number in the array
  var nums = [
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
  ]
  var maxNumber = 50
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < maxNumber) {
      maxNumber = nums[i]
    }
  }
  console.log(maxNumber)
}
```
