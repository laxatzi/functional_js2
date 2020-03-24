// Javascript Prototype

// * Distilling 'A Beginner's Guide to JavaScript's Prototype' by by Tyler McGinnis in https://tylermcginnis.com

  // You can't get very far in javascript without dealing with objects. They are foundational to almost every aspect of the language. Objects are key/value pairs. 
  // The most common way to create an object is with curly braces, and then you add properties and methods to the object using dot notation.

  (function(){
  'use strict';
  
  let animal = {};
   animal.name = 'Leo';
   animal.energy = 10;

      animal.eat = function (amount) {
      console.log(`${this.name} is eating.`);
      this.energy += amount;
      }

      animal.sleep = function (length) {
      console.log(`${this.name} is sleeping.`);
      this.energy += length;
      }

      animal.play = function (length) {
      console.log(`${this.name} is playing.`);
      this.energy -= length;
      }

}());//end wrapper iife

// Of course this is not versatile since odds are in our application we'd probably need to create more animals. So we encapsulate the code inside of a function that we can invoke whenever we needed to create a new animal. 
// We call this pattern 'Functional Instantiation' and the function itself a 'Constructor Function'.

(function(){
  'use strict';

  function Animal(name, energy){
   let animal = {};
   animal.name = name;
   animal.energy = energy;
      
      animal.eat = function(amount){
         console.log(`${this.name} is eating.`);
         this.energy += amount;
      }
      
      animal.sleep = function(hours){
         console.log(`${this.name} is sleeping`);
         this.energy += hours;
      }
      
      animal.play = function(hours){
         console.log(`${this.name} is playing`);
         this.energy -= hours;
      }

  return animal;  
}

const villyTheTiger = Animal('Villy', 10);
console.log(villyTheTiger.name); // Villy

const taoTheBear = Animal('Tao', 9);
console.log(taoTheBear.name); // 9

}());//end wrapper iife

//In the above code whenever you want to create a new  'animal', or a new 'instance' broadly speaking, all we have to do is to invoke the Animal function, passing it the animals name and energy level.

/* 
  The methods we have created, though, are not only dynamic but also abstract. There is no need to recreate them again and again, each time we create a new Animal.
  This way we make every animal object bigger than it needs to be. 
  A cleaner way to write our code is to move those methods to their own object, and then have each animal reference that object.
  We call this pattern 'Functional Instantiation with Shared Methods.
  Example:

*/

(function(){
  'use strict';

  // methods sit on their own object (animalMethods)
  const animalMethods = {
     eat(amount) {
        console.log(`${this.name} is eating`);
        this.energy += amount;
     }
   ,
     
        sleep(hours){
           console.log(`${this.name} is sleeping`);
           this.energy += amount;
        }
     ,
     
        play(hours){
           console.log(`${this.name} is playing`);
           this.energy -= amount;
        }
     } // end of variable
  
   // our Animal function --here we referencing that object
   function Animal(name, energy){
      let animal = {};
      animal.name = name;
      animal.energy = energy;
      animal.eat = animalMethods.eat;
      animal.sleep = animalMethods.sleep;
      animal.play = animalMethods.play;

      return animal;
   }
    
   const taoTheBear = Animal('Tao', 9);
   console.log(taoTheBear.name); // 'Tao'

}());//end wrapper iife

//By moving the shared methods to their own object and referencing that object inside of our Animal function, we have now solved the problem of memory waste and overly large animal objects.


// OBJECT CREATE
 // Object.create
/* 
  Object.create allows you to create an object and whenever there is a failed property lookup on that object, it can consult another object to see if that other object has the property. 
  example:
*/
(function(){
  'use strict';

  const parent = {
     name: "Katerina",
     age: 45,
     heritage: "Greek"
  }

  const child = Object.create(parent);
  child.name = "John";
  child.age = 7;

  console.log(child.name);// John
  console.log(child.age);// 7 
  console.log(child.heritage);// Greek  

}());//end wrapper iife

// Now with Object.create in our tool belt, instead of adding all the shared to the animal one by one, we can delegate to the animalMethods object instead.
  // example:

  (function(){
    'use strict';
   
    const animalMethods = {
      eat(amount) {
        console.log(`${this.name} is eating.`);
        this.energy += amount;
      },
      sleep(length) {
        console.log(`${this.name} is sleeping.`);
        this.energy += length;
      },
      play(length) {
        console.log(`${this.name} is playing.`);
        this.energy -= length;
      }
    }
    
    function Animal (name, energy) {
      let animal = Object.create(animalMethods);
      animal.name = name;
      animal.energy = energy;
    
      return animal;
    }
    
    const leo = Animal('Leo', 7);    
    leo.eat(10); // "Leo is eating."

   
   }());//end wrapper iife

   //So now we call leo.eat, javascript will look up for the 'eat' method on the 'leo' object. That look up will, of course, fail and then, because of Object.create, it will delegate to the animalMethods object which is where it will find 'eat'.

   // Prototypal Instantiation
   /* 
     So far, so good. 
     But, it seems just a bit 'hacky' to have to manage a separate object (animalMethods) in order to share methods across instances. That seems like a common feature that you'd want to be implemented into the language itself. This is when 'prototype' comes into play.

     Simply put...every function in javascript has a 'prototype' property that references an object.
     Example:
   */

   (function(){
     'use strict';

     function doThing(){}
     console.log(doThing.prototype); //[object Object] { ... }

    }());//end wrapper iife

// What if instead of creating a separate object to manage our methods (like we are doing with animalMethods), we just put each of those methods on the Animal function's prototype? Then all we'd have to do is instead of using Object.create to delegate to animalMethods, we could use it to delegate to Animal.prototype. We call this pattern 'Prototypal Instantiation'. 

// Prototypal Instantiation

(function(){
  'use strict';

  function Animal(name, energy){
    let animal  = Object.create(Animal.prototype);
    animal.name = name;
    animal.energy = energy;

      return animal;  
  }

  Animal.prototype.eat = function(amount){
    console.log(`${this.name} is eating`);
    this.energy += amount;
  };

  Animal.prototype.sleep =function(length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  };

  Animal.prototype.play = function(length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  };

  const leo = Animal('leo', 7);
  const snoopy = Animal('snoopy', 10);
  leo.eat(10); // "leo is eating"
  snoopy.play(5); // "snoopy is playing"

}());//end wrapper iife

// Concluding: 'prototype' is just a property that every function in javascript has, and it allows us to share methods across all instances of a function. All our functionality is still the same but now instead of heaving to manage a separate object for all the methods, we can just use another object that comes built into the Animal function itself. The Animal.prototype

// What is nice about that slow, methodical approach we took to get here is that we now have a deep understanding of how the 'new' keyword is doing under the hood.
// Looking back at our animal constructor, the two most important parts were 1) Creating the object , and 2) Returning it. 
// Without creating the object with Object.create we wouldn't be able to delegate to function's prototype on failed lookups. Without the return statement, we wouldn't get back created object.

(function(){
  'use strict';

  function Animal(name, energy){
    let animal = Object.create(Animal.prototype); // --
    animal.name = name;
    animal.energy = energy;

    return animal; // --
  }

}());//end wrapper iife

// Here the cool thing about 'new' -- when you invoke a function using the 'new' keyword, those two lines of code are done for you under the hood and the object that is created is called 'this'.

// Using comments to express what is happening under the hood and assuming the Animal constructor is called with the 'new' keyword:

(function(){
  'use strict';
  function Animal(name, energy){
// const this = Object.create(Animal.prototype);
  this.name = name;
  this.energy = energy;

  // return this;

  } // end function

  const leo = new Animal('Leo', 10);
  const snoopy = new Animal('Snoopy', 7);


}());//end wrapper iife

// and the whole code without 'under the hood' explanation comments

(function(){
  'use strict';

  function Animal (name, energy) {
    this.name = name
    this.energy = energy
  }
  
    Animal.prototype.eat = function (amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    }
    
    Animal.prototype.sleep = function (length) {
      console.log(`${this.name} is sleeping.`)
      this.energy += length
    }
    
    Animal.prototype.play = function (length) {
      console.log(`${this.name} is playing.`)
      this.energy -= length
    }
  
  const leo = new Animal('Leo', 7)
  const snoop = new Animal('Snoop', 10)

}());//end wrapper iife

// Bear in mind that the reason the 'this' keyword is created for us is because we called the constructor function with the 'new' keyword. If you leave the 'new' keyword off when invoking the function, that 'this' object never gets created nor does it get implicitly returned. 
  // For example

  (function(){
    'use strict';
  
    function Animal(name, energy){
      this.name = name;
      this.energy = energy;
    }
      
  const leo = Animal("Leo", 10);
  console.log(leo); // undefined

  }());//end wrapper iife

  // If javascript is not your first programming language you might feel a little restless.
  // Why don't we use a native Class method?
  /* 
      For those unfamiliar, a Class allows you to create a blueprint for an object. Then whenever you create an instance of that Class, you get an object with the properties and methods defined in the blueprint. 
      Sound familiar? That is basically what we did with our Animal constructor function above.
      However, instead of using the 'class' keyword, we just added a regular old JS function to recreate the same functionality. 
      In 2015, ECMAScript, the official javascript specification, released ES6 with support for Classes and the 'class' keyword. 
      Example of how our Animal constructor function would look like with the new 'class' syntax:
  */

  (function(){
    'use strict';
  
    class Animal {
      constructor(name, energy){
        this.name = name;
        this.energy = energy
      }
      eat(amount){
        console.log(`${this.name} is eating`);
        this.energy += amount;
      }
      sleep(hours){
        console.log(`${this.name} is sleeping`);
        this.energy += hours;
      }
      play(hours){
        console.log(`${this.name} is playing`);
        this.energy -= hours;
      }
    }
  
    const leo = new Animal('Leo', 7);
    const snoop = new Animal('Snoop', 10);

  }());//end wrapper iife

  /* 
      So, is this is the new way to create classes why did we spent so much time writing code the old way? 
      The reason for that is because the new way (with the 'class' keyword), is primarily just syntactical sugar over the existing way we have called the pseudoclassical pattern. 
      In order to fully understand the convenience syntax of ES6 classes, you first must understand the pseudoclassical pattern.
  */