//sync-code run in particular sequance.each instruction wait for previous to complete 
console.log("one");
console.log("two");
//console.log("three");


//Async-it allow execution of code to next instuction immediateky and doesnot block the flow
//setTimeout()-used to execute the function
//function hello() {
  //  console.log("hello");
//}
//setTimeout(hello,4000);//2sec=2 mili sec


setTimeout(()=>{
    console.log("Jaya");
},4000);

console.log("three");
console.log("four");
