
var input = document.getElementById('display');
// var input = document.getElementById('display').value // why can't Work!

function press(string){
  if (input.value === 'Error'){
    input.value = "" ; 
   
  }
let value = input.value ;
  let i = value.slice(-1);
  
  if ('+-/*'.includes(i) && '+-/*'.includes(string) )
  {
    input.value = value.slice(0,-1)+ string;
    
  } else {
  input.value+= string ;}
  
}


function back(){
  let str = '' ;
  for ( let i =0 ; i < input.value.length-1 ; i++){
    str += input.value[i] ;
  }
  input.value = str ;
}

function res(){
      
  try {
    // if someone wants to change operation   
  if ('+-/*'.includes(input.value)  )
  {
    input.value = value.slice(0,-1)+ string;
    
  } // if somwone enter = without passing any value 
else{

    input.value = eval ( input.value)
    }
  }
  catch (e) {
        if (input.value === ''){
      
      input.value = '0' ;
    }
    if ( '+-/*'.includes(value.slice(-1) )){
      input.value = value.slice(0,-1);
    }
    else{
    input.value = 'Error';}
   // input.value = ""
  }
}

function AC(){
  input.value = '' ;
}


