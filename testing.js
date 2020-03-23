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
