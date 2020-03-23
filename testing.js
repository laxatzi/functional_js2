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

// capitalization with OOP 

(function(){
  'use strict';

  // SomeText is capitalized because it is going to be our object
  // We create a local copy of 'text' to have something to work with
  var SomeText = function(text) {
    this.text = text;
  };
 
//We declared this new method on the prototype of our SomeText object. This way we can create multiple instances without them having separate copies in memory of each of this methods.
 // Now it is obvious why we passed our parameter 'text' to the 'this.text'. Otherwise this method defined on the prototype would not have access to 'text'.

  SomeText.prototype.capitalize = function(str){
    var firstLetter = str.charAt(0).toUpperCase();
    var restOfWord = str.substring(1);
    return [firstLetter, restOfWord].join("");
  };

 SomeText.prototype.capitWords = function() {
   var result = [];
   var strAsArray = this.text.split(" ");
   for(var j = 0; j < strAsArray.length; j++){
     result.push(this.capitalize(strAsArray[j]));
   }
   return result.join(" ");
 };

 // Instead of adding an onclick to the button we are going to add an eventListener 
 document.getElementById('button').addEventListener('click', function(){
   var getPrompt = prompt("Where do you live?");
   var someTextInstance = new SomeText(getPrompt); //When we create an instance of this object, we have to use the new keyword
   console.log(someTextInstance.capitWords());
 })

}());//end wrapper iife
