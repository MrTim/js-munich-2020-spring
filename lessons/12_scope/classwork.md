# Classwork 12 -- Code Challanges

Today's we are going to go through some quick code challenges together

## Challange 1 -- FirstLastLetter

Write a function that removes the first and last letter from a work.

```js
const words = [
    'interfere',
    'soojee',
    'victrice',
    'civilisations',
    'succinonitrile',
    'dogfighters',
    'tempeh'
];

function removeFirstLast(str){
    // TODO: your code here
};

const correctAnswer = [
    'nterfer',
    'ooje',
    'ictric',
    'ivilisation',
    'uccinonitril',
    'ogfighter',
    'empe'
];

const correct = JSON.stringify(correctAnswer) === JSON.stringify(words.map(removeFirstLast));
console.log('correct answer?', correct);
```

## Challange 2 -- Sum Positive Numbers

Write a function that returns the sum of all the positive numbers in an array


```js
const testNums = [
    1,
    -4,
    7,
    12
];

function positiveSum(nums){
    // TODO: your code here
};

const answer = positiveSum(testNums);

console.log('The correct sum', answer === 20);
```

## Challange 3 -- Facebook like text

Write a function that simulates the facebook like text.

The function with receive an array of names and needs to output the correct like text.

```js
[] // "no one likes this"
["Peter"] // "Peter likes this"
["Jacob", "Alex"] // "Jacob and Alex like this"
["Max", "John", "Mark"] // "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"] // "Alex, Jacob and 2 others like this"
```

## Challange 4 -- MinMax

Given a string of space separated numbers return the minimum and maximum in for form of an object

```js
const numbers = "4 5 6 1 6 7 7 8 9";
/*
your function should return
{
    min: 1,
    max: 9
}
/*


