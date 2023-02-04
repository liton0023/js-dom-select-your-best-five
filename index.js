

document.getElementById('calculate-btn').addEventListener('click',function(){

    console.log('clicked')
const selectPlayer=document.getElementById('player-list');
const playerList=selectPlayer.innerText;
console.log(playerList)

const playerNumber = selectPlayer.childNodes.length
if(playerNumber < 5){
    alert('Plz add minemum 5 players')
    return
}



const inputFild=document.getElementById('per-player-input');
const inputvalue=inputFild.value;
// console.log(inputvalue)

const playerCost=playerNumber * inputvalue;
// console.log(playerCost)
    
const playerExpence=document.getElementById('player-expence');
playerExpence.innerText=playerCost;
inputFild.value='';


})


document.getElementById('total-calculate-btn').addEventListener('click',function(){
    const playerExpence=document.getElementById('player-expence');
    const previousPlayerExpence=playerExpence.innerText;
    const previousPlayerExpenceValue=parseFloat(previousPlayerExpence);

    const mangerInput=document.getElementById('manger-input');
    const mangerInputValue=mangerInput.value;
    const mangerInputPrice=parseFloat(mangerInputValue);

    const coachInput=document.getElementById('coach-input');
    const coachInputValue=coachInput.value;
    const coachInputPrice=parseFloat(coachInputValue);

    const totalAmount=previousPlayerExpenceValue + mangerInputPrice + coachInputPrice;

    const total=document.getElementById('total-cost');
    total.innerText=totalAmount;

    mangerInput.value='';
    coachInput.value='';
})


const players=document.querySelectorAll('.card-body');

for (let player of players){

const selectBtn=player.childNodes[5];
const selectedPlayer=document.getElementById('player-list');
const createElement=document.createElement('p');

selectBtn.addEventListener('click',function(){
    const playerName=player.childNodes[1].innerText;
    createElement.innerText=playerName;
    selectedPlayer.appendChild(createElement);
   
    console.log(playerName)
})
    // console.log(selectBtn);
}

// console.log(players);




