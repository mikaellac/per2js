const calculateCos=()=> {
    const value=document.getElementById("inputCos").value
    const intValue=value!=="" ?parseInt(value):0
    const resultDiv=document.getElementById("resultCos")
    resultDiv.textContent=Math.cos(intValue*Math.PI/180).toFixed(2)
}

const getMin=()=>{
    const value=document.getElementById("numberSequence").value;
    console.log(value)
    const numbersArray = value.split(/[;, ]\s*/).map(Number);


    const resultDiv=document.getElementById("resultMinMax")
    resultDiv.textContent=Math.min(...numbersArray);
    
}

const getMax=()=>{
    const value=document.getElementById("numberSequence").value;
    const numbersArray = value.split(/[;, ]\s*/).map(Number);

    const resultDiv=document.getElementById("resultMinMax")
    resultDiv.textContent=Math.max(...numbersArray);
}


const getRandomNumber=()=>{
    const inputValue=document.getElementById("maxRandomValue").value;
    const value=parseInt(inputValue!==""?inputValue:0);

    const resultDiv=document.getElementById("randomNumber")
    resultDiv.textContent=Math.floor(Math.random() * value)
}


const randomNumberButton=document.getElementById("getRandomNumber");
randomNumberButton.addEventListener("click",getRandomNumber)


const calculateCosButton=document.getElementById("calculateCos")
calculateCosButton.addEventListener("click",calculateCos)

const getMinValue=document.getElementById("getMin")
getMinValue.addEventListener("click",getMin)
const getMaxValue=document.getElementById("getMax")
getMaxValue.addEventListener("click",getMax)

