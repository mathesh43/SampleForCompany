function circle(){
  var square = document.querySelector('#square');
  var squareBorderRadius = window.getComputedStyle(square, null).getPropertyValue('border-radius');
  var newBorderRadius  = 5 + parseInt(squareBorderRadius);
  if(parseInt(newBorderRadius)<50) {
    document.getElementById("square").style.borderRadius =  newBorderRadius + "px";
    document.getElementById("reduce").disabled = false;
    document.getElementById("reset").disabled = false;
  } else {
    document.getElementById("square").style.borderRadius =  "50px";
    document.getElementById("increase").disabled = true;
  }
}



function square(){
  var square = document.querySelector('#square');
  var squareBorderRadius = window.getComputedStyle(square, null).getPropertyValue('border-radius');
  var newBorderRadius  =  parseInt(squareBorderRadius) - 5;
  if(parseInt(newBorderRadius)>0) {
    document.getElementById("square").style.borderRadius =  newBorderRadius + "px";
    document.getElementById("increase").disabled = false;
    document.getElementById("reset").disabled = false;
  } else {
    document.getElementById("square").style.borderRadius =  "0px";
    document.getElementById("reduce").disabled = true;
      document.getElementById("reset").disabled = true;
  }
}


function reset(){
  document.getElementById("square").style.borderRadius = "0px";
  document.getElementById("reduce").disabled = true;
  document.getElementById("reset").disabled = true;
    document.getElementById("increase").disabled = false;
}
