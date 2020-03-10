// Higher Order Functions

/* 
  Javascript treats functions as "first class citizens"
    --The type of a function is Object 
    --They can be assigned to a variable as a value
    --They can be passed to another function as an argument
    --They can be returned by another function as a result

  A Higher Order Function is a function that takes another function as an argument
  For example:
  Both setInterval and setTimeout functions take functions as one of their arguments
  See below:
*/

(function(){
  'use strict';
  const logTime = ()=> console.log(new Date().toLocaleTimeString());
  const timer = setInterval(logTime,1000);
  
  console.log(setTimeout(()=>clearInterval(timer), 3000));
}());//end wrapper iife
