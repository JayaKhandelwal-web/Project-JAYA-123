//for loop
/*for(let i=0;i<=5;i++){
    console.log("jaya Khandelwal");
}

//calculate sum of 1 to 5 number
let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;  
}
 console.log(sum);


 //while loop
 
let i=1;
while(i<=5){
    console.log(i);
     i++;  
}
    

//do while loop -- run at least one time
let i=20;
do{
    console.log("heloo");
    i++;
}while(i<=10);

 
//for-of 
let str="Jaya";
for(let i of str){
    console.log(i);
}
    

let str="jaya";
let length=0;
for(let i of str){
    console.log(i);
    length++;

}
console.log(length)


*/


let student={
    name:"Jaya",
    age:22,
    cgpa:8.5,
}
for( let key in student){
    console.log("key is",key,"value=",student[key]);
}

