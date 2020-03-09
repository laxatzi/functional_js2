// Capitalize with Functional Programming
/* 
  FUNCTIONAL PROGRAMMING STYLE CHARACTERISTICS 

    --Take advantage of functions as first-class objects
    --Don't change external values or state while executing functions
    --Describe the problem or solution

*/

(function(){
   'use strict';
  
   function capify(str){
      return [str.charAt(0).toUpperCase(), str.substring(1)].join("");
   }

   function capifyMoreWords(fn, str){
      return str.split(" ").map(fn).join(" ");
   }

   function getValue(e){
      var feedback = prompt("Give me feedback! Which style of programming do you prefer?");
      alert(capifyMoreWords(capify, feedback));
   }

   document.getElementById("button").addEventListener("click", getValue);
}());//end wrapper iife