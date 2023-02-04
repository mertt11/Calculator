const numButtons=document.querySelectorAll("button[id^=but]");
const opButtons=document.querySelectorAll("button[id^=opBut]");
const equalsBut=document.getElementById("equalsBut");
const clearBut=document.getElementById("clear-but");
const delBut=document.getElementById("del-but");


let text2=document.getElementById("text2");
let text1=document.getElementById("text1");

clearBut.addEventListener("click",clear);
delBut.addEventListener("click",del);
equalsBut.addEventListener("click",evaluate);

let currentOperation=null;
let resetCheck=false;


numButtons.forEach((button)=>
button.addEventListener("click",()=>{
  addToEquation(button.textContent);
  shadow(button);
}));

opButtons.forEach((button)=>
button.addEventListener("click",()=>{
  setOperation(button.textContent);
  shadow(button);
}
));

function addToEquation(txt){
  if(resetCheck||text2.textContent==="0")
    resetSecreen(); 
  text2.textContent=text2.textContent+txt;
}

function resetSecreen(){
  text2.textContent="";
  resetCheck=false;
}

function setOperation(operation){
  if(currentOperation!=null) evaluate();
  currentOperation=operation;
  text1.textContent=text2.textContent+currentOperation;
  resetCheck=true;
}
function evaluate(){
  if(currentOperation===null) return;
  if(currentOperation==="/"&&text2.textContent==="0"){
    alert("you cant divide");
    return;
  }
  text1.textContent=text1.textContent+text2.textContent+"=";
  text2.textContent=RoundNum(operate(currentOperation,parseFloat(text1.textContent),parseFloat(text2.textContent)));
  currentOperation = null;
}
function clear(){
  text1.textContent="";
  text2.textContent="0";
  currentOperation=null;
  resetCheck=false;
}
function del(){
  text2.textContent=text2.textContent.slice(0,text2.textContent.length-1);
}

function RoundNum(num){
  if(typeof(num)==="number")
    return num;
  return num.toFixed(2);
}

function add(a,b){
  return a+b;
}
function sub(a,b){
  return a-b;
}
function mul(a,b){
  return a*b;
}
function divide(a,b){
  return a/b;
}

function operate(op,a,b){
  switch(op){
    case "+":
      return add(a,b);
    case "-":
      return sub(a,b);
    case "x":
      return mul(a,b);
    case "/":
      return divide(a,b);
  }
}

function shadow(button){
  button.style.backgroundColor="rgba(192, 229, 229, 0.856)";
  setTimeout(()=>{button.style.backgroundColor="";},150);
}

//keyboard press
document.addEventListener("keydown",(e)=>{
  if(e.key==='0'){
    shadow(but11);
    addToEquation(e.key);
  }else if(e.key==='1'){
    shadow(but7);
    addToEquation(e.key);
  }else if(e.key==='2'){
    shadow(but8);
    addToEquation(e.key);
  }else if(e.key==='3'){
    shadow(but9);
    addToEquation(e.key);
  }else if(e.key==='4'){
    shadow(but4);
    addToEquation(e.key);
  }else if(e.key==='5'){
    shadow(but5);
    addToEquation(e.key);
  }else if(e.key==='6'){
    shadow(but6);
    addToEquation(e.key);
  }else if(e.key==='7'){
    shadow(but1);
    addToEquation(e.key);
  }else if(e.key==='8'){
    shadow(but2);
    addToEquation(e.key);
  }else if(e.key==='9'){
    shadow(but3);
    addToEquation(e.key);
  }else if(e.key==='+'&& e.shiftKey){
    shadow(opBut4);
    setOperation("+");
  }else if(e.key==='-'){
    shadow(opBut3);
    setOperation(e.key);
  }else if(e.key==='*'||e.key==='x'){
    shadow(opBut2);
    setOperation(e.key);
  }else if(e.key==='='&& e.shiftKey){
    shadow(equalsBut);
    evaluate();
  }

});