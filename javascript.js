const butContainer=document.querySelectorAll("button[id^=but]");
let text2=document.getElementById("text2");
let text1=document.getElementById("text1");


let displayValue1=0;
let displayValue2=0;
let dsplyVal=0;
let equation="";
let op=null;
let eqls=0;

[].forEach.call(butContainer,function(e){
  e.addEventListener("click",function(){

    if(e.textContent==="+"||e.textContent==="-"){
      displayValue1=parseInt(equation);//displayValue1=3
      text1.textContent=text2.textContent+e.textContent;//2+
      equation="";
    }else if(e.textContent==="="){
      text1.textContent=text1.textContent+equation+e.textContent;
      eqls=dsplyVal+displayValue1;
      text2.textContent=eqls;
    }else{
      displayValue2=parseInt(e.textContent);//5
      equation=equation+displayValue2;//"5"
      dsplyVal=parseInt(equation);//23
      console.log(dsplyVal);
      text2.textContent=dsplyVal;//23
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

