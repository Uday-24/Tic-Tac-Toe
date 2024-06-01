let namePlayer1;
let namePlayer2;
let turn = true;
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function disableBox(box){
    box.disabled = true;
}
function enableBox(box){
    box.disabled = false;
}

let header = document.querySelector("header");
let main = document.querySelector("main");
let winnerMsg1 = document.querySelector(".para1");
let boxes = document.querySelectorAll(".box-common");
let winnerPart = document.querySelector(".winner");
function checkWinner(){
    for(let pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                winnerPart.classList.remove("disp-none");
                main.classList.add("disp-none");
                header.classList.add("disp-none");
                let win = turn==false? namePlayer1 : namePlayer2;
                winnerMsg1.innerText = "Congratulations ".concat(win); 
                console.log();
                boxes.forEach((box)=>{
                    disableBox(box);
                })
            }
        }
    }
}

let p_1 = document.querySelector(".p-1");
let p_2 = document.querySelector(".p-2");
let player_2 = document.querySelector(".player-2");
let player_1 = document.querySelector(".player-1");
let startGameBtn = document.querySelector(".start-btn");
let mainStartDiv = document.querySelector(".start-outer-div");
startGameBtn.addEventListener("click", ()=>{
    namePlayer1 = player_1.value;
    namePlayer2 = player_2.value;
    mainStartDiv.classList.add("disp-none");
    header.classList.remove("disp-none");
    main.classList.remove("disp-none");

    let active_1 = "Player 1 : ".concat(namePlayer1, " : O");
    let active_2 = "Player 2 : ".concat(namePlayer2, " : X");
    p_1.innerText = active_1;
    p_2.innerText = active_2;
});

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText = "O";
            turn = false;
            p_1.classList.remove("color-green");
            p_2.classList.add("color-green");
        }
        else{
            box.innerText = "X";
            turn = true;
            p_1.classList.add("color-green");
            p_2.classList.remove("color-green");
        }
        disableBox(box);
        checkWinner();
    });
});

let resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", ()=>{
    p_1.classList.add("color-green");
    p_2.classList.remove("color-green");
    boxes.forEach((box)=>{
        box.innerText = "";
        enableBox(box);
        turn=true;
    });
});

let newGameBtn = document.querySelector(".new-game-btn");
newGameBtn.onclick = () =>{
    winnerPart.classList.add("disp-none");
    main.classList.remove("disp-none");
    header.classList.remove("disp-none");
    boxes.forEach((box)=>{
        box.innerText = "";
        enableBox(box);
    });
}