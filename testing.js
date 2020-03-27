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

  //document.getElementById('aButton').onclick = questAnswer;

}());//end wrapper iife

// capitalization with OOP 


 (function(){
  'use strict';

 class CapSomeText {

    constructor(text){
       this.text = text;
    };

    capitalize(text){
       const firstLetter = text.charAt(0).toUpperCase();
       const restOfWord = text.substring(1);
       return [firstLetter, restOfWord].join("");
    };

    capitWords(){
       let result = [];
       const textAsArray = this.text.split(" ");
       //loop
       for(let j = 0; j<textAsArray.length; j++){
          result.push(this.capitalize(textAsArray[j]));
       }
       return result.join(" ");
    };
 } // end of class

  // Instead of adding an onclick to the button we are going to add an eventListener 
 document.getElementById('button').addEventListener('click', function(){
   let getPrompt = prompt("Where do you live?");
   const someTextInstance = new CapSomeText(getPrompt); //When we create an instance of this object, we have to use the new keyword
  alert(someTextInstance.capitWords());
 });

}());//end wrapper iife

// Commenting on our OOP code
/* 
  Structurally this is a completely different approach to building a program.
  Object Oriented Code has some advantage as long as some disadvantages.

  The good:
  -- The methods that we want to use are being defined specific to the type of object that is going to use them which add some convenience. And we have also defined them on the prototype of that object rather than directly on the instances and that allows us to conserve memory.
  We only need one copy of those methods and every instance can use them.

  -- We have used the new addEventListener instead of onClick and that is more versatile because it allows us to listen for different types of events.

 The not so good:
 -- We are defining all of our methods to the prototype of this object. We are doing that because they need access to the variables that we are scoped to this inside of the constructor. That is kind of an awkward construct and it is hard to keep track of while you are doing your development. 
 -- We are still using looping in order to go through all of the array elements. 
    We know looping can be messy. For one thing, creating a loop like this relies on having an extra variable, such as counter. It is good to avoid creating extra state that you have to keep track of, if possible. And also avoid creating extra variables.
-- The loop that we are creating is changing a variable outside of itself. And that can make it difficult to reason logically about what the code is doing.
-- Although this code is easier to test than the imperative code we saw earlier, it is still relatively difficult to test because our object definition is spread across the prototype in multiple places.
*/

//Functional Programming approach
(function(){
  'use strict';

  const capitalize = function(str){
    return [str.charAt(0).toUpperCase(), str.substring(1)].join("");
  }
  const capWords = function(fn, str){
    return str.split(" ").map(fn).join(" ");
  }
  const feedback = function(el){
   const getPrompt = prompt("Where do you live?");
   alert(capWords(capitalize, getPrompt));
 }
 //document.getElementById('main_button').addEventListener('click', feedback);
}());//end wrapper iife

//  Refactor code to ES 2015 syntax

(function(){
  'use strict';

  const capitalize = str=> [str.charAt(0).toUpperCase(), str.substring(0)].join("");
  const capWords = (fn, str)=> str.split(" ").map(fn).join(" ");
  const feedback = el=> {
    const getPrompt = prompt("Where do you live?");
    alert(capWords(capitalize, getPrompt));
  }
  document.getElementById('main_button').addEventListener('click', feedback);

}());//end wrapper iife