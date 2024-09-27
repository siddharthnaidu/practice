console.log(1);
var p = new Promise((resolve, reject) => {
	console.log("p1");      
  setTimeout(() => {
      console.log("p2");
    resolve("Resolved")
  }, 0);
  console.log("p3");
});
p
.then((e)=>{
	console.log(2, e)
})
console.log(3)
setTimeout(()=>{
	console.log(4)
},0);
console.log(5);
//
