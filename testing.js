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

// Commenting on the above piece of functional code
/* 
  Functional style takes advantage of the fact that JS allows you to use functions as first class objects. Which means that you can use them as arguments and you can pass them around from function to function just as any other variable. Functional style also encourages you not to make changes to values that are outside of your functions or change state of the application while you are executing the function.
  What is better about this example? 
  The code is much more concise, easier to read and easier to reason about.
  The functions are defined in an independent and reusable way.
  Our 'capitalize' function could be dropped into any place that you need to pass in a string and capitalize it. 
  Our 'capWords' function doesn't depend on 'capitalize' function. It just depends on whatever function you happen to pass in that performs a function on a single word.
  There is no reliance on some abstract object being passed around.
  Nothing is happening outside of these functions that is changing as a result of what is inside the functions. 
  As a result, this code is much easier to unit test, because you can write a simple test that verifies that each of these functions does what you expect it to do with a variety of inputs.
  Those functions behave that way REGARDLESS of what context they are in.

*/

//  Refactor code to ES 2015 syntax
{
  'use strict';

  const capitalize = str=> [str.charAt(0).toUpperCase(), str.substring(1)].join("");
  const capWords = (fn, str)=> str.split(" ").map(fn).join(" ");
  const feedback = el=> {
    const getPrompt = prompt("Where do you live?");
    alert(capWords(capitalize, getPrompt));
  }
  document.getElementById('main_button').addEventListener('click', feedback);

} //The {} is a block that, when encountered, will immediately execute just like an immediately invoked function expression.
/* 
  Now we end up with this code that is so much sorter and very concise, and does everything that we wanted to do. And what is different about this code compared to what we have done before is that, first of all, it is certainly extremely concise. 
  There are NO mutable variables, we haven't used the 'var' keyword anywhere, and we really didn't need to since we defined everything as constants that we didn't need to worry about changing.
  We defined our functions with implied return values. 
  We didn't have to use the 'return' keyword.
*/

//RECURSIONS
/* 
  Repeat calling function from within (and then iterating), until a completion condition is met.
  Ideally recursion function is pure.
  Example of an old code, not clean, way of recursion function with a typical factorial:
*/

(function(){
  'use strict';

  const factorial = number=> {
    let result = 1;
    for(let j = number; j>1; j--){
       result *= j;
    }
    return result;
  }
console.log(factorial(6)); // 720
}());//end wrapper iife

// Same factorial using the while loop
(function(){
  'use strict';

  const factorial = number=> {
    let j = number;
    let result =1;
    while(j>1){
      result *= j;
      j--;
    }
    return result;
  }

  console.log(6); // 720

}());//end wrapper iife


// Use recursion for a factorial function
(function(){
  'use strict';

  const factorial = number=>{
    if(number <= 0){
      return 1;
    }
    return number *= factorial(number-1);
  }

  console.log(factorial(6)); // 720

}());//end wrapper iife

// proper tail call
(function(){
  'use strict';

  const factorialPTC = number=> factorial(number, 1);
  const factorial = (number, accum)=> {
    if(number<=0){
      return accum = 1;
    }
  return (number-1, number * accum);
  }; 
 

  console.log(factorialPTC(6)); //

}());//end wrapper iife