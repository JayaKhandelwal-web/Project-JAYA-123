//promisis is an objec in js used to eventaul completion of task
//3 ststes of pending,resolve,reject

//let promise=new Promise((resolve,reject)=>{
    //console.log("i ma student");
  //  resolve(123);
//})


const getPromise=()=>{
return new Promise((resolve,reject)=>{
    console.log("i am promis");
   // resolve("success");
   reject("error");
});
}

let promise=getPromise();
promise.then(()=>{
    console.log("promises fullfilled");
})