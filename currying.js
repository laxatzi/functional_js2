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

// Doing deep currying for a variadic* function
/* 
    *In computer science, an operator or function is variadic if it can take a varying number of arguments; that is, if its arity is not fixed.

   What if we'd like to customize every single element of our function?
   Technically, in functional programming, the definition of currying limits us to working with one argument at a time. 
   Partial application.
   Unlike currying which produces a series of chained functions, each one taking a single argument, with partial application we take a function and apply it to some of its arguments but not all of them, producing a new function in the process. 
   Using a currying function for partial application allows us to just pass in the function that we want this applied to. And we can approach it the same way we use currying.

   Example of applying the currying technique to variadic functions:

*/
(function(){
  'use strict';
  const deeplyCurriedGreet = (greeting)=>(separator)=>(emphasis)=>(name)=>greeting + separator + name + emphasis;

  const greetAwkwardly = deeplyCurriedGreet("Hello")("...")("?");
  console.log(greetAwkwardly("Maria")); // Hello...Maria
  console.log(greetAwkwardly("John")); //  Hello...John

// As you noticed again in this case the name was passed as the final function. The reason for this is that we have decided that the name is the thing that is most likely to change. 
// We can pass fewer arguments when we are creating our variations on the curried function. Any args that we don't pass when we are defining our functions can be passed when we call this functions.

  const sayHello = deeplyCurriedGreet("Hello")(", ");
  console.log(sayHello(".")("Polyxeni")); //"Hello, Polyxeni."
  const askHello = sayHello("?");
  console.log(askHello("Paul")); // "Hello, Paul?"

  }());//end wrapper iife

  // Conclusion 
  /* 
    --Currying takes advantage of how javascript functions can take and return functions as values
    --Currying a function allows you to create sets of related functions
    --A particular concern when currying a function is the order of the arguments
    --Unlike purely functional languages, JavaScript always supports functions that can take ANY number of arguments
    --Partial application allows you to create sets of related  functions that may fill in multiple arguments
  */