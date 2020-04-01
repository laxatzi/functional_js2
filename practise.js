function Animal(name, energy){
   const animal = {};
   animal.name = name;
   animal.energy = energy;
   animal.eat = animalMethods.eat;
   animal.play = animalMethods.play;

   return animal;
}

const animalMethods = {
   eat(amount){
      console.log(`${this.name} is eating`);
      this.energy += amount;
   },
   play(hours){
      console.log(`${this.name} is eating`);
      this.energy -= hours;
   }
};

const tiger = Animal("Sirhan", 10);
const panda = Animal("Tao-Tao", 7);

console.log(tiger.name);
console.log(panda.name);


// Object create
/*
const parent = {
   name: "katerina",
   age: 40,
   heritage: "Greek",
   city: "New York"
};

const child = Object.create(parent);
child.name = "Markos";
child.age = 7;

console.log(child.name); // Markos
console.log(child.heritage); // Greek
console.log(child.city);  // New York

*/
// cleaning code with the use of Object create

(function(){
  'use strict';

  function Animal(name, energy){
   const animal = Object.create(Animal.prototype);
   animal.name = name;
   animal.energy = energy;

   return animal;
}

Animal.prototype.eat = function(amount){
   console.log(`${this.name} is eating`);
   this.energy += amount;
};

Animal.prototype.play = function(hours){
   console.log(`${this.name} is eating`);
      this.energy -= hours;
};

Animal.prototype.sleep = function(hours){
   console.log(`${this.name} is sleeping`);
      this.energy += hours;
};

const tiger = Animal("Sirhan", 10);
const panda = Animal("Tao-Tao", 7);

console.log(tiger.name);
console.log(panda.name);

}());//end wrapper iife

// using new keyword instead of manually delegate

(function(){
   'use strict';
   function Animal(name, energy){
      this.name = name;
      this.energy = energy;
   }
  
   const tiger =  new Animal("Sirhan", 10);
   const panda = new Animal("Tao-Tao", 7);
}());//end wrapper iife

// Using Classes in javascript 

(function(){
   'use strict';

  class Animal{
     constructor(name, energy){
        this.name = name;
        this.energy = energy;
     }
     eat(amount){
      console.log(`${this.name} is eating`);
      this.energy += amount;
   };
   
   play(hours){
      console.log(`${this.name} is eating`);
         this.energy -= hours;
   };
   
   sleep(hours){
      console.log(`${this.name} is sleeping`);
         this.energy += hours;
   };

  }// end of class

  const tiger =  new Animal("Sirhan junior", 10);
   const panda = new Animal("Tao-Tao junior", 7);

  console.log(tiger.name);
  console.log(panda.name);
  
}());//end wrapper iife

// OOP
(function(){
   'use strict';
// class:CapSentence  functions:capitalize(text) , capMoreWords
 class CapSentence{
    constructor(text){
      this.text = text;
    }

    capitalize(text){
       const firstLetter = text.charAt(0).toUpperCase();
       const restOfWord = text.substring(1);
       return [firstLetter, restOfWord].join("");
    }

    capMoreWords(){
       let result = [];
       const textAsArr = this.text.split(" ");
       for(let j = 0; j < textAsArr.length; j++){
         result.push(this.capitalize(textAsArr[j]));
       }
       return result.join(" ");
    }// end capMoreWords
 }
 
   document.getElementById("button").addEventListener("click", function(){
      const getPrompt = prompt("Where do you live?");
      const feedback = new CapSentence(getPrompt);
      alert(feedback.capMoreWords());
   })

}());//end wrapper iife

// Functional approach 
(function(){
   'use strict';
  const capitalize = function(str){
     return [str.charAt(0).toUpperCase(), str.substring(1)].join("");
  }

  const capMoreWords = function(fn, str){
     return str.split(" ").map(fn).join(" ");
  }

  const feedback = function(el){
     const getPrompt = prompt("Where do you live?");
     alert(capMoreWords(capitalize, getPrompt));
  }
 // document.getElementById('main_button').addEventListener('click', feedback);

}());//end wrapper iife

// Refactor code to ES 2015 syntax

(function(){
  'use strict';

   const capitalize = str=> [str.charAt(0).toUpperCase(), str.substring(1)].join("");
   const capMoreWords = (fn, str)=> str.split(" ").map(fn).join(" ");
   const feedback = (el)=> {
      const getPrompt = prompt("Where do you live?");
      alert(capMoreWords(capitalize, getPrompt));
   }
   document.getElementById('main_button').addEventListener('click', feedback);
   
}());//end wrapper iife

// Recursion
(function(){
  'use strict';

 const factorial = number=> {
    if(number <= 0){
       return 1;
    }
    return number * factorial(number-1);
 }

  console.log(factorial(6)); // 720
}());//end wrapper iife

// Proper Tail Calls
(function(){
  'use strict';

  const factorialPTC = number=> factorial(number, 1);
  const factorial = (number, accumulator)=> {
     if(number <= 0){
        return accumulator;
     }
   return factorial(number-1, accumulator* number);
  }

 console.log(factorialPTC(5)); // 120

}());//end wrapper iife

//   CURRYING
(function(){
  'use strict';
  function greetCurried(greet, name){
   return function(name){
      if(typeof(greet) !== 'string'){
         return "Greetings!";
      }
      else if(typeof(name) !== 'string'){
         return `${greet}!`;
      }
   return `${greet}, ${name}!`;
   }
}// end of curried

const greetHi = greetCurried("Hi");
console.log(greetHi("Peter"));
const greetHello = greetCurried("Hello");
console.log(greetHello("Helen"));

}());//end wrapper iife

// Refactor code to ES6 standards
(function(){
   'use strict';

  const greetCurried = (greet, name)=> {
   return function(name){
      if(typeof(greet) !== 'string'){
         return "Greetings!";
      }
      else if(typeof(name) !== 'string'){
         return `${greet}!`;
      }
   return `${greet}, ${name}!`;
   } 
  }

  const greetHello = greetCurried("Hello");
  console.log(greetHello("Helen"));

}());//end wrapper iife


// variadic functions
 // currying variadic function
(function(){
  'use strict';

  const greetDeepCurried = greeting=> separator=> emphasis=> name=> {
   return greeting + separator+ name + emphasis;
}

const greetHesitation = greetDeepCurried("Hello")("...")("?");
console.log(greetHesitation("John")); // Hello...John?
const sayHello = greetDeepCurried("Hello")(",");
console.log(sayHello("!")("Antonis"));

}());//end wrapper iife

// map, reduce, filter
// Exercise:
/* 
  Create a merged word from three letter pet words found in a pet array.
  petArray = ["dog", "cat", "canary", "goldfish"];
*/
{
  "use strict";
  
   const pets = ["dog", "cat", "canary", "goldfish"];
   const threeLetterPetWordsMerge = words=> {
      // subfunctions
     const threeLetterWords = word=> word.length === 3;
     const capWords = word=> word.charAt(0).toUpperCase() + word.slice(1);
     const mergeWords = (word1, word2)=> word1 + word2;
   // functional methods combined
     return pets.filter(threeLetterWords).map(capWords).reduce(mergeWords);
   }// end of function
   // test
   console.log(threeLetterPetWordsMerge(pets)); // 

}// end of code block

// functions combination example
{
   'use strict';
  
    const timesTwo = num=> num*2;
    const addOne = num=> num+1;

    console.log(addOne(timesTwo(3))); // 7
    console.log(timesTwo(addOne(3))); // 8
    console.log(addOne(timesTwo(addOne(3)))); // 9

}// end of block

// refactor code
{
  'use strict';
  
  const timesTwo = num=> num * 2;
  const addOne = num=> num + 1;

  const timesTwoAddOne = num=>{
     let holder = num;
     holder = timesTwo(holder);
     holder = addOne(holder);

     return holder;
  }

  // test
  console.log(timesTwoAddOne(4)); // 9

  const addOneTimesTwo = num=> {
     let holder = num;
     holder = addOne(holder);
     holder = timesTwo(holder);

     return holder;
  }

  // test 
  console.log(addOneTimesTwo(4)); // 10

}// end of code block

// function composition example
{
  'use strict';
   
  const addOne = num=> num + 1;
  const timesTwo = num=> num * 2;

  const compose = (f1, f2)=>{
     return value => f1(f2(value)); //every inner function is returning a value that’s going to be operated on by the outer functions.
  }

  const addOneTimesTwo = compose(timesTwo, addOne); // 10
  const timesTwoAddOne = compose(addOne, timesTwo); // 9

  console.log(addOneTimesTwo(4)); // 10
  console.log(timesTwoAddOne(4)); // 9
} // end of block

// Exercise on Functional Programming principles
/* 
  So far, we have seen two distinct principles on functional programming.
  1) Don't alter an object/variable - create new ones and return them (if necessary) from a function
  2) Declare function arguments - any computation inside a function depends only on the arguments, and NOT any global object/variable.

  Refactor code so that the global array 'bookList' is not changed inside either function. The 'add' function should add the given 'bookName' to the end of the array passed to it and return an array, and any new parameters should be added before the 'bookName' parameter.

*/
(function(){
   'use strict';

  // The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

//console.log(bookList);


}());//end wrapper iife

// Refactor
{
   'use strict';

   // The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

  const  add = (arr, bookName)=> {
   const newArr = arr.map(x=> x);
   newArr.push(bookName);
   return newArr;
 }// end of fn
 
const  remove = (arr, bookName)=> {
   const newArr = arr.map(x=> x);
   const book_index = newArr.indexOf(bookName);
   if (book_index >= 0) {
 
     newArr.splice(book_index, 1);
     return newArr;
 
     }
 }// and of fn

 
var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList); 
}