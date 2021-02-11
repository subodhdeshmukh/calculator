let io = form.io.value;
let flag = 1;
document.getElementById("msg").style.transition = "all 2s";
//functions
function operators(a){
   if(flag==1){
      form.io.value +=  a;
      flag=0;
      document.getElementById("msg").innerHTML = "";
   } else {
      // alert("don't use one operator after another");
      document.getElementById("msg").innerHTML = "don't use one operator after another";
   }
}

function numbers(a){
   form.io.value +=  Number(a);
   flag=1;
   document.getElementById("msg").innerHTML = "";
}


//   opertors
//add
function addition(a){
   operators(a);  
}
//subtract
function subtraction(a){
   operators(a);  
}
// div
function division(a){
   operators(a);   
 }
 //mul
 function multiplication(a){
   operators(a);   
 }


// numbers
 function zero(a){
    numbers(a);
 }
 function one(a){
   numbers(a);
 }
 function two(a){
   numbers(a);
 }
 function three(a){
   numbers(a);
 }
 function four(a){
   numbers(a);
 }
 function five(a){
   numbers(a);
 }
function six(a){
  numbers(a);
}
function seven(a){
  numbers(a);
}
function eight(a){
  numbers(a);
}
function nine(a){
  numbers(a);
}


  //result



  function results(){
    let ioValue = form.io.value;
    if((ioValue.charAt(ioValue.length-1) == "+") || (ioValue.charAt(ioValue.length-1) == "-") || 
    (ioValue.charAt(ioValue.length-1) == "*") || (ioValue.charAt(ioValue.length-1) == "/"))
    {
      document.getElementById("msg").innerHTML = "last value should not be operator";  
    } 
    else
    {
      form.io.value = eval(ioValue);
    }
  }




