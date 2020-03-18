// Lets solve an exercise where we want to create a string of three letter words from an array of strings. (So we need to capitalize letters at the beginning of each word and then concatenate them in one single word)

// lets try with the old way using a for loop

(function(){
  'use strict';

  const animals = ['cat', 'dog', 'horse'];
  let threeLetterAnimalsArr = [];
  let threeLetterAnimals;
  for(let j = 0; j < animals.length; j++){
     let arrElem = animals[j];
     if(arrElem.length === 3){
        arrElem = arrElem.charAt(0).toUpperCase()+arrElem.slice(1);
        threeLetterAnimalsArr.push(arrElem);
     }
  }

  threeLetterAnimals = threeLetterAnimalsArr.join("");
  
  console.log(threeLetterAnimals); // CatDog

}());//end wrapper iife