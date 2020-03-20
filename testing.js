(function(){
'use strict';
var result;

function getText()  {
   var getPrompt = prompt("Where do you live?");
   capitalize(getPrompt);
   alert(result.join(" "));
}

function capitalize(text){
  var splitedText = text.split(" ");
  var capitalizedText= "";
  result = [];

  for(var j = 0; j < splitedText.length; j++){
    capitalizedText = [
      splitedText[j].charAt(0).toUpperCase(),
      splitedText[j].substring(1)
    ].join("");
    result.push(capitalizedText);
  }
}

  document.getElementById('main_button').onclick = getText;
}());//end wrapper iife
