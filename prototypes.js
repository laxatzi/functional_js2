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
