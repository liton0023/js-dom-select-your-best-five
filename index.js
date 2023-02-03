document.getElementById('select-player').addEventListener('click',function(){
    // console.log('clicked')
    const player1=document.getElementById('player-name-1');
    const playerList1=player1.innerText;

    const selectedPlayer=document.getElementById('player-list');
    selectedPlayer.innerText=playerList1;

    console.log(selectedPlayer);

})

document.getElementById('calculate-btn').addEventListener('click',function(){
const selectPlayer=document.getElementById('player-list');
const playerList=selectPlayer.innerText;
const playerNumber=parseFloat(playerList);


const inputFild=document.getElementById('per-player-input');
const inputvalue=inputFild.value;
// console.log(inputvalue)

const playerCost=5*inputvalue;
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

