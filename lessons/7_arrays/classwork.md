# Classwork 6 -- Random Wikipedia Articles + Arrays

Today's goal is to use a dynamic data source to practice with js arrays and gererating html.

## Spec

1. Start with the boilerplate [here](https://gist.github.com/BTBTravis/c91c1a2598feb28da5e57bb997fda17a)
1. The random wiki js file adds a function to global scope called `onRandomWikipediaArticle(cb)` which takes a callback function, cb. This is vary similer to the `addEventListiner('click', cb)` 
1. To get an idea of what is in an article console log it and explore it in the dev tools
1. Add each incomming article to an array and display a representation of the articles on the page in a `<ul>`
    - a representation in this case could be the title (easy) or maybe div full of information like the discription and an image (harder)
1. Seprate from the big list use what you learned about arrays to also represent the first article of the array. Title it "First Article:" with a header tag
2. Also represent the last article of the array. Add title "Last Article:" on this one with a header tag

## Bonus
- add an input put that takes an number i and  represents the article array at index i on the page with title "Article at index i:"
