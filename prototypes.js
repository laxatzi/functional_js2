// Javascript Prototype
  // You can't get very far in javascript without dealing with objects. They are foundational to almost every aspect of the language. Objects are key/value pairs. 
  // The most common way to create an object is with curly braces, and then you add properties and methods to the object using dot notation.

  (function(){
  'use strict';
  
  let animal = {}
   animal.name = 'Leo'
   animal.energy = 10

      animal.eat = function (amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
      }

      animal.sleep = function (length) {
      console.log(`${this.name} is sleeping.`)
      this.energy += length
      }

      animal.play = function (length) {
      console.log(`${this.name} is playing.`)
      this.energy -= length
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

//In the above code whenever you want to create a 'new animal', or a new 'instance' broadly speaking, all we have to do is to invoke the Animal function, passing it the animals name and energy level.

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
