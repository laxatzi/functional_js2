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

const greetDeepCurried = greeting=> seperator=> emphasis=> name=> {
   return greeting + seperator+ name + emphasis;
}

const greetHesitation = greetDeepCurried("Hello")("seperator")("...")("?");
console.log(greetHesitation("John")); // Hello...John?
const sayHello = greetDeepCurried("Hello")(",");
console.log(sayHello("!")("Antonis"));



