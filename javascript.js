const butContainer=document.querySelectorAll("button[id^=but]");
let text2=document.getElementById("text2");
let text1=document.getElementById("text1");


let displayValue1=0;
let displayValue2=0;
let dsplyVal=0;
let equation="";
let equtn="";
let op=null;
let eqls=0;
let sum=0;
let num=0;
[].forEach.call(butContainer,function(e){
  e.addEventListener("click",function(){

      
    
    if(e.textContent==="+"||e.textContent==="-"){
      addToEquation(e.textContent);  
      op=e.textContent;
      num=sum+parseInt(equation);//num=23
      resetSecreen();
      text1.textContent=num+op;
    }else if(e.textContent==="="){
      text2.textContent=num+parseInt(equation);
      addToEquation(e.textContent);  
      text1.textContent=text1.textContent+equation;
    }else{
      addToEquation(e.textContent);  
      text2.textContent=equation;
    } 
  });
 
});


function addToEquation(txt){
  equation=equation+txt;//equation="5="
  //equtn=txt;//equtn=""
}
function resetSecreen(){
  equation="";
}








function add(...args){
  return args.reduce((total,a)=>total+a,0);
}
function sub(...args){
  return args.reduce((a,b)=>a-b);
}
function mul(...args){
  return args.reduce((total,a)=>total*a,1);
}
function divide(...args){
  return args.reduce((total,a)=>total/a);
}


function operate(op,...args){
  switch(op){
    case "+":
      return add(...args);
    case "-":
      return sub(...args);
    case "*":
      return mul(...args);
    case "divide":
      return divide(...args);
  }
}

