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

  class CapSentence  {

    constructor(text){
       this.text = text;
    }

    capitalize(text) {
       
     const firstLetter = text.charAt(0).toUpperCase();
     const restOfWord = text.substring(1);
     return [firstLetter, restOfWord].join("");
    }

    capMoreWords(){
       let result = [];
       const splitedWords = this.text.split(" ");
       for(let j = 0; j< splitedWords.length; j++){
          result.push(this.capitalize(splitedWords[j]));
       }
       return result.join(" ");
    }


  }  // end of class

  document.getElementById("button").addEventListener('click', function(){
    let getPrompt = prompt("Where do you live?");
    const capitalizeWords =  new CapSentence(getPrompt);
    alert(capitalizeWords.capMoreWords());
  });

}());//end wrapper iife

// imperative code 
(function(){
   'use strict';
   
     var result;
   
     function questAnswer(){
       var getPrompt = prompt("Where do you come from?");
       capitalize(getPrompt);
       console.log(result.join(" "));
     }
     
     function capitalize(text){
       result = [];
       var transformed;
       var splitedText = text.split(" ");
   
       for(var i = 0; i < splitedText.length; i++){
         transformed = [
           splitedText[i].charAt(0).toUpperCase(),
           splitedText[i].substring(1)
         ].join("");
         result.push(transformed);
       }
     }
   
     document.getElementById('main_button').onclick = questAnswer;
   
   }());//end wrapper iife