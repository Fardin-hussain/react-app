import React from 'react';

function add(a,b) {
    let sum = a + b;
    return sum;
}
    
function sub(a,b) {
    let sub = a - b;
    return sub;
}
    
function div(a,b) {
    let div = a / b;
    return div.toFixed(2); 
}
    
export {add,sub,div};