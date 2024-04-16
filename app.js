
let yourScore = 0;
let computerScrore = 0;
let getAccessMsg = document.querySelector(".msg-para");

let selfScore = document.querySelector(".self-score");
let ComScore = document.querySelector(".comp-score");
const selectChoice = document.querySelectorAll(".img-box");

const drawMsg = ()=>{
    getAccessMsg.innerText = "The Game is Draw! Try Again";
    getAccessMsg.style.backgroundColor = "white";
    getAccessMsg.style.color = "blue";
    getAccessMsg.style.border = "2px solid green";
};
//This function for chceck that is it win or loss!
const showWin = (isWinner,userC,printCompNum) =>{
    if(isWinner){
        yourScore++;
        selfScore.innerText = yourScore;
        getAccessMsg.innerText = `You Win Your ${userC} beats ${printCompNum}`;
        getAccessMsg.style.backgroundColor = "Green";
    }else{
        computerScrore++;
        ComScore.innerText = computerScrore;
        getAccessMsg.innerText = `You Loss! ${printCompNum} beats your ${userC} choice`;
        getAccessMsg.style.backgroundColor = "red";
        getAccessMsg.style.border = "none";
        
    }
}
const RandomGen = () =>{
    //Generate Random number from computer..
    const allOption = ["rock","paper","scissors"];
    const findRan = Math.floor(Math.random()*3);
    return allOption[findRan];
};

const playGame = (userC) =>{        
    //console.log("You =",userC);
    const printCompNum = RandomGen();
   //console.log("Computer =",printCompNum);
    
    if(userC===printCompNum){
        drawMsg();
    }else{
        let isWinner = true;
        if(userC === "rock"){
            isWinner = printCompNum==="paper"?false:true;
        }else if(userC==="paper"){
            isWinner=printCompNum==="scissors"?false:true;
        }else{
            isWinner=printCompNum==="rock"?false:true;
        }
        showWin(isWinner,userC,printCompNum);
    }

}; 

selectChoice.forEach((vari)=>{
    vari.addEventListener("click",()=>{
        const defineChoices = vari.getAttribute("id");
        playGame(defineChoices);

    });
});