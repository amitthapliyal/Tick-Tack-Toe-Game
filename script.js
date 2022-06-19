console.log("welcome to tic tac toe");
let music = new Audio("sound1.mp3");
let audioturn = new Audio("sound2.mp3");
let gameover = new Audio("ding.mp3");
let turn = "X";
let isgameover = false;

// FUNCTION TO CHANGE THE TURN
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
}
// FUNCTION TO CHECK FOR WIN
const checkwin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="") ){
document.querySelector('.info').innerText= boxtext[e[0]].innerText + "won"
isgameover = true
document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width ="400px" ;
document.querySelector().style.transform = "translate(23vw,39vw) rotate(90deg)"
        }
    })
};
// games logic
[]
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((Element) => {
  let boxtext = Element.querySelector(".boxtext");
  Element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
        boxtext.innerText = turn;
      turn = changeTurn();
      audioturn.play();
      checkwin();
      if(!isgameover){
      document.getElementsByClassName("info")[0].innerText="turn for" + turn;
    }}
  });
});
//  add oneclick listner to reset button
reset.addEventListener("click",()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(Element => {
        Element.innerText=""
    });
    turn="X"
    isgameover = false
        document.getElementsByClassName("info")[0].innerText="turn for" + turn;
        document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width ="0" 
})
