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
   const animal = Object.create(animalMethods);
   animal.name = name;
   animal.energy = energy;

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
   },
   sleep(hours){
      console.log(`${this.name} is sleeping`);
      this.energy += hours;
   }
};

const tiger = Animal("Sirhan", 10);
const panda = Animal("Tao-Tao", 7);

console.log(tiger.name);
console.log(panda.name);
console.log(panda.sleep);


}());//end wrapper iife