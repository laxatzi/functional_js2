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
const taoTheBear = Animal('Tao', 9);

}());//end wrapper iife

