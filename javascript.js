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
    case add:
      add(...args);
      break;
    case sub:
      sub(...args);
      break;
    case mul:
      mul(...args);
      break;
    case divide:
      divide(...args);
      break;
  }
}