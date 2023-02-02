const butContainer=document.querySelectorAll("button[id^=but]");
let text2=document.getElementById("text2");
let text1=document.getElementById("text1");
//const but3=document.getElementById("but3");

let displayValue1=0;
let displayValue2=0;
let dsplyVal=0;
let equation=0;
let op=null;
let eqls=0;

[].forEach.call(butContainer,function(e){
  e.addEventListener("click",function(){
    if(e.textContent==="+"){
      op="add";
      dsplyVal=displayValue1;//3
      equation=displayValue1+"+";//3+
      text1.textContent=equation;
    }else if(e.textContent==="="){
      equation=equation+"=";
      text1.textContent=equation;
      text2.textContent=eqls;
      //alert(operate(op,dsplyVal,displayValue2));

    }else{
      displayValue2=parseInt(e.textContent);//displayValue2=3
      if(op==="add"){
        //alert(dsplyVal+" "+displayValue2);
        eqls=operate(op,dsplyVal,displayValue2);
      }
      displayValue1=displayValue2;        //displayValue1=3
      text2.textContent=displayValue2;
    }
  });
});



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
    case "add":
      return add(...args);
    case "sub":
      return sub(...args);
    case "mul":
      return mul(...args);
    case "divide":
      return divide(...args);
  }
}

