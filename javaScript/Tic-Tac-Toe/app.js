let boxes = document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset");

let turn0=true; //playerx,player0

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{ //action perform when buuton click
        console.log("box was clciked");
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true; // no chnge when we enter 0 or x 
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPattern) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") { //👉 Check kar rahe hain ki teeno boxes empty na ho
            if (pos1val === pos2val && pos2val === pos3val) { //Agar teeno values same hain (X X X ya O O O)
//👉 To winner mil gaya 🎉
                console.log("Winner is:", pos1val);
            }
        }
    }
}