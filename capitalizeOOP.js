// OBJECT ORIENTED JS
/* 
  --Data treated as objects to be passed around
  --Use defined methods to manipulate objects
  --Passing messages
  --Hiding and sharing properties
  --Composition
  --Inheritance
*/
(function(){
   'use strict';
  var SomeText =  function(text){ // this is going to be our object thus the capitalization
    this.text = text; // we creating a local copy of the text that is being passed in as arg.
   }; // end of object

  SomeText.prototype.capify = function(str){
     var firstLetter = str.charAt(0);
     var remainder = str.substring(1);
     return [firstLetter.toUpperCase(), remainder].join("");
  } // end of object

  SomeText.prototype.capifyWords = function(){
     var result = [];
     var textArray = this.text.split(" ");
     for(var j = 0; j<textArray.length; j++){
        result.push(this.capify(textArray[j]));
     }
     return result.join(" ");
  } // end of object
  
// connect to DOM
document.getElementById("button").addEventListener("click", function(el){
   var prompting = prompt("In which city do you leave?");
   var newText = new SomeText(prompting);
   alert(newText.capifyWords());
}); 

}());//end wrapper iife

// ADVANTAGES of OOP
/* 
  --Improved focus on encapsulation of functionality
  --Ability to 'use strict' in a limited scope
  --Methods used by a given object are attached to that object
  --Methods are defined on the prototype to converse memory
  --New addEventListener is more versatile
*/

// DISADVANTAGES of OOP
/* 
  --Methods added to prototype depend on this in the constructor
  --Looping depends on extra variables, such as counter
  --Operations inside the loop change variables outside the loop
  --Dependence on the new keyword can create hidden errors
  --Still brittle, not very portable, and hard to test
*/
