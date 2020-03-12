//What does currying do?
/* 
  Currying is a way to consolidate the functionality of multiple functions
  that may all share similar code, but may take different arguments.
  With currying we may create that code in one place and then,
  pass in different arguments, and define separate versions of that function.
*/

// Lets write a function that is supposed to greet people, and every time you want to greet someone you pass in the greeting that you want to send and the name of the person you want to greet:
(function(){
  'use strict';
  function greet(greeting, name){
     if(typeof(greeting) !== "string" || typeof(name) !== "string"){
        return "Greetings";
     }
     return `${greeting}, ${name}`;
  }

  console.log(greet("Hello", "John")); // Hello John
  console.log(greet("Hi", "Tom"));  // Hi Tom
  // above code is not clean at all

  // If we try to make it cleaner by reducing arguments we lose in versatility 

  function greetHello(theName){
     if(typeof(theName)!=="string"){
        return "Hello!";
     }
     return `Hello ${theName}`;
  }

  console.log(greetHello("Mike"));// Hello Mike

  // But what if i want to use another greeting like 'howdy' or 'hi' ?
  // With currying we can write clean AND versatile code

 function greetCurried(greet){
    return function(aName){
       if(typeof(greet)!=="string"){
          return greet;
       }else if(typeof(aName)!=="string"){
            return "Greetings!";
       }
       return `${greet} ${aName}`;
    }
 }
const greetHi = greetCurried("Hi");
console.log(greetHi("Maria")); // Hi Maria
const greetHello = greetCurried("Hello");
console.log(greetHello("Tom")); // Hello Tom
const greetHowdy = greetCurried("Howdy");
console.log(greetHowdy("Makis")); // Howdy Makis
console.log(greetCurried()); // Greetings!

}());//end wrapper iife