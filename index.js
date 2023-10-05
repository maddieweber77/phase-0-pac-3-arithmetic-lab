function add(a,b) {
    return a+b;
  }
  console.log(add(900,45));

  function subtract(a,b) {
    return a-b;
  }

  function multiply(a,b) {
    return a*b;
  }

  function divide(a,b) {
   return a/b;
  }

function increment(n) {
   n++;
   return n;
}

function decrement(n) {
    n--;
    return n;
 }

 function makeInt(n) {
    var parsedInt = parseInt(n,10);
    return parsedInt;
  }
  
  console.log(makeInt("0x2328"));
  
  function preserveDecimal(n) {
    var parsedFloat = parseFloat(n);
    return parsedFloat;
  }
  
  console.log(preserveDecimal("2.222"));