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

 class CapSomeText {

    constructor(text){
       this.text = text;
    }

    capitalize(str){
       const firstLetter = str.charAt(0).toUpperCase();
       const restOfWord = str.substring(1);
       return [firstLetter, restOfWord].join("");
    };

    capitWords(){
       let result = [];
       const strAsArray = this.text.split(" ");
       //loop
       for(let j = 0; j<strAsArray.length; j++){
          result.push(this.capitalize(strAsArray[j]));
       }
       return result.join(" ");
    }
 } // end of class


  // Instead of adding an onclick to the button we are going to add an eventListener 
 document.getElementById('button').addEventListener('click', function(){
   let getPrompt = prompt("Where do you live?");
   const someTextInstance = new CapSomeText(getPrompt); //When we create an instance of this object, we have to use the new keyword
  console.log(someTextInstance.capitWords());
 });

}());//end wrapper iife
