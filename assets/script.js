// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Ben, Avila" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = document.querySelector("#qty-total")

///Functions
function updateGbQuant(gbDisplayQuant){
    let gb = document.querySelector("#qty-gb")
    gb.textContent = gbDisplayQuant
    total.textContent = (dispTotal)
    
}

function updateCcQuant(ccDisplayQuant){
    let cc = document.querySelector("#qty-cc")
    cc.textContent = ccDisplayQuant
    total.textContent = (dispTotal)
    
}

function updateSugarQuant(sugarDisplayQuant){
    let sugar = document.querySelector("#qty-sugar")
    sugar.textContent = sugarDisplayQuant
    total.textContent = (dispTotal)
    
}

// selecting the element with an id of credit
const credit = document.querySelector('#credit')


// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector("#minus-gb")

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector("#minus-cc")

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector("#minus-sugar")


// Code to update name display
credit.textContent = `Created by ${yourName}`

//Gingerbread Event Listener
gbPlusBtn.addEventListener('click', function(e) {

    gb++;

    dispTotal = gb + cc + sugar
    

    updateGbQuant(`${gb}`);
})

gbMinusBtn.addEventListener('click', function(e) {
if (gb > 0) {

    gb--;

    dispTotal = gb + cc + sugar
   

    updateGbQuant(`${gb}`);

}
})
//Chocolate Chip event listener 
ccPlusBtn.addEventListener('click', function(e){

    cc++;
    
    dispTotal = gb + cc + sugar

    updateCcQuant(`${cc}`)
    
})

ccMinusBtn.addEventListener('click', function(e){
if (cc > 0) {

    cc--;

    dispTotal = gb + cc + sugar

    updateCcQuant(`${cc}`)
    
}
})
//Sugar Sprinkle Event listener
sugarPlusBtn.addEventListener('click', function (e){

    

    sugar++;

    dispTotal = gb + cc + sugar
    updateSugarQuant(`${sugar}`)
    
})
sugarMinusBtn.addEventListener('click', function(e){
if (sugar > 0) {
    

    sugar--;

    dispTotal = gb + cc + sugar
    updateSugarQuant(`${sugar}`)
    

}
})