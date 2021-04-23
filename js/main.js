const counterNumber = document.querySelector(".counter-number")
const decreaseBtn = document.querySelector(".decrease-btn")
const resetBtn = document.querySelector(".reset-btn")
const increaseBtn = document.querySelector(".increase-btn")


let currentNumber = 0
decreaseBtn.addEventListener('click',()=>{
    currentNumber-- 
    counterNumber.innerText = currentNumber

    changeNumberColor()
})

resetBtn.addEventListener('click',()=>{
    currentNumber = 0
    counterNumber.innerText = currentNumber

    changeNumberColor()
})

increaseBtn.addEventListener('click', ()=>{
    currentNumber++
    counterNumber.innerText = currentNumber

    changeNumberColor()
    
})

function changeNumberColor(){
    currentNumber >= 0 ?  counterNumber.style.color = "green" : counterNumber.style.color = "red"
    if (currentNumber === 0)counterNumber.style.color = "#000";
}



