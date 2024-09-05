
// see here we are overriding valueOf function of x

function x(){
 
 console.log('x called')
}

x.valueOf = () => {
  return 2
}


console.log(x() == 2)// false
console.log(x == 2) // true

// so whats happening here is when x() is called it will return x function returened value which is undefined
// and value of x is 2 because we have overrided the inbuilt method ..we can do this ideally its a function not primitive type
// we use like this when we compare an object with a primitive type like for example a number ...
// ideally we cannot compare an object with primitive type because a primitive type has  one value ..i.e a set value will be there..
// but objects on the other hand are reference values  that is not a single value..an object is a data type designed to hold many values 
// here we have overrided its behaviour and changes its value to return true when used in comparisions


let y = 2;
console.log('value of y is (here primitive type) ',y.valueOf())

let y2 = ()=>{
  console.log('y2 is just a function')
}
console.log('value of y2 is ',y2.valueOf())

y2.valueOf = ()=> 3

console.log('value of y2 is - ',y2.valueOf())

////////////////////////// Problem (sum(1)(2)(3) == 6

function sum(a) {
    const innerSum = (b) => sum(a + b);
  
    innerSum.valueOf = () => {
      console.log('see a',a)
      return a};
 
    return innerSum;
  }

  console.log(sum(1)(2)(3) == 6); // this compares values
  console.log(sum(1)(2)(3)); // this returns function