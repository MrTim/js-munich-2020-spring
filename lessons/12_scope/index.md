# Lecture 12 Variable Scope

Welcome to lecture 12 on variable scope in JavaScript

## Midterm Announcement

We have a midterm test coming up on Monday May 18th, 2020.

- 30 min
- conducted during video call
- format:
    - multiple choice
    - short answer
- will cover all we have learned thus far
- topics:
    - variables
        - when to use `const` vs `let`
        - scope
    - arrays
        - `.length`
    - objects
        - nested objects
    - loops
        - `for`
        - `.forEach`
    - github
    - numbers and arithmetic
    - strings
    - callbacks
    - the DOM
        - selecting dom elements
        - event listeners

## Homework Process Reminder

We have noticed a few problems with the homework so here are a few reminders

- please do the homework, self learning is the only way to learn programming
- merged pull requests without approves don't count
- in order to get the certificate and complete the course one must complete 80% of the homework. We
  have several students with 0% currently.

## Final Projects Announcement

As many of you know the second half of the semester is all about each student doing a final
project. These final projects will be interactive apps using everything we've learned and more.
They will give us a chance to tailor curriculum to each to student and push them.

### Rough online of the final project process

1. Decide on topic / goal of your webapp **<---- this week**
  - visual design
  - tech outline
1. Next week start development
1. Semiweekly check-ins and personalized goals / assignments
1. Short presentation of final project during REDI demo day
  - If this event does not take place in person there will be an alternative presentation format such
    as blog post

### What makes a good final project idea

- creative
- solves a problem
- shows something previously unseen
- unique
- is interactive

### Sample ideas

- deep e-commerce store
    - cart
    - checkout system
    - backend api communication
- corona virus info
    - present corona virus data in a meaningful
- story share app
    - a place where users can share stories / photos about a certain topic


## Step through debugging in JavaScript

Here we will follow the computer as it executes each line of code.

```js
const randomString = 'aslkdfjsadf3h3f23h3fhdslkafjasdf'; // global varable

function countLetter(needleLetter, haystackStr) {
    const letters = haystackStr.split(''); // local varable
    const lettersMatchingSearch = letters.filter(function (letter) {
        return letter === needleLetter;
    });
    return lettersMatchingSearch.length;
}


const countA = countLetter("a", randomString);
console.log('countA', countA);

```

## Window global scope

From the example code above we can access `randomString` directly on the window object of the
browser. This means that each JavaScript file we attach to the page shares this global scope. 

```js
// in a.js
const randomString = 'aslkdfjsadf3h3f23h3fhdslkafjasdf'; // global varable

// in b.js
console.log(randomString);
```

This is generally a bad thing because it can lead to name collision. Often times there are many JS
files attached to a page doing different things and we don't want them to interfere with each other.

This is also know as global scope pollution.

## How do we prevent global scope pollution?

Variables in JavaScript are either function scoped or block scoped, more on that coming up. To
prevent them from polluting the global scope we need to create an new scope for them.

Function scope!

```js
// file a.js
(function () {
    const randomString = 'aslkdfjsadf3h3f23h3fhdslkafjasdf'; // global varable
    ...
})();

// file b.js
console.log(randomString); // undefined
```

## Block scope vs Function scope

Just going to touch lightly here because it a deeper topic but variables created with `const` and
`let` are block scoped ex `if`, `for` blocks. Variables created with `var` or `function` are
function scoped.




## Resources

MDN Scope: https://developer.mozilla.org/en-US/docs/Glossary/Scope
