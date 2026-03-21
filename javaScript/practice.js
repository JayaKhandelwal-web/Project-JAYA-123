
//let score=20;
/*
let score=prompt("enter the score");
let Grade;
if(score<=100 && score>=80){
    console.log("Grade A");
}
else if(score<=80 && score>=60){
    console.log("Grade B");
}
else if(score<=60 && score>=30){
    console.log("Grade C");
}
else {
    console.log("Fail");
}
console.log(Grade);


//print all enev between 1 to 100
for(let i=0;i<=100;i++){
    if(i%2==0){
console.log(i);
}
}

//game guessing the number to user
let gameNum=20;
userNum=prompt("enter the number");
while(userNum!=gameNum){
    userNum=prompt("you neter wrong number");
}
console.log("congrates")


//prompt user to enter full name . generate based on output like with @ stsrt and end with full length
let fullName=prompt("enter your Full name");
let userName= "@" + fullName +fullName.length;
console.log(userName);


//average of student 
let mrk=[30,4,33,76,45,77,89,98];
let sum=0;
for(let val of mrk){
    sum= sum+val;    
}
let avg=sum / mrk.length;
console.log(mrk);
console.log(`the average of ${avg}`)*/

//array of items ,all items have offer of 10%
let item=[200,400,500,290,88];
for(let i=0;i<item.length;i++){
    let offer=item[i] /10;
    item[i]-=offer;
}
console.log(item);


