function receivesAFunction(Tracy){
    Tracy();
}

const returnsANamedFunction =()=>receivesAFunction
    
  
function returnsAnAnonymousFunction(){
    return function(){
    }
    
}