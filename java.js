const buttons = document.querySelectorAll('button')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear')
const operators = document.querySelectorAll('.operator')
const numbers = document.querySelectorAll('.number')
const display = document.querySelector('.screen')
const back = document.querySelector('.back')
const negative = document.querySelector('.negative')

let operation = []
display.textContent = operation

negative.addEventListener('click',makeNegativ)
equal.addEventListener('click',prepOperation)
back.addEventListener('click',backspace)
operators.forEach(operator => operator.addEventListener('click',addOperator))
numbers.forEach(number => number.addEventListener('click',addNumber))
clear.addEventListener('click',()=> {display.textContent = '';operation=[]})

function backspace(){

    if(operation[operation.length-1] == ' '){
        operation = operation.slice(0,operation.length-3)
    }
    else{
        operation = operation.slice(0,operation.length-1)
    }
    display.textContent = operation
}
function makeNegativ(){

    if(operation[operation.length-1] == ' ' || operation == ''){
    operation += '-'
    display.textContent = operation}
    else{}
    
}
function addNumber(e){

    operation += e.path[0].textContent 
    display.textContent = operation
}

function prepOperation(){

    if(!(Number.isInteger(+operation[operation.length-2])) && !(operation[operation.length-2] == '-')){
        operation = operation.slice(0,operation.length-3)
        display.textContent = operation
    }
    else{
        fullarray = operation.split(" ")
        numberarray = fullarray.filter(item =>(Number.isInteger(+(item)))).map(x => +(x))
        operatorarray = fullarray.filter(item =>!(Number.isInteger(+(item))))
            if(operation[1] == '-'){
            operatorarray.splice(0,1)
            numberarray.splice(0,1)
            numberarray[0] = -(numberarray[0])
            calcOperation(operatorarray,numberarray)}
            else if(Number.isInteger(+operation[0]) || operation[0] == '-'){
            calcOperation(operatorarray,numberarray)
            }
            else if(Number.isInteger(+operation[operation.length-1])){}
        else{}  
}
}

function addOperator(e){

    text = e.path[0].cssText    
    operation += ` ${e.path[0].textContent} ` 
    display.textContent = operation
}
function calcOperation(operatorarray, numberarray){  
    if(!(operatorarray.indexOf('/')=='-1')){
        let n = operatorarray.filter(x => x == '/').length
        for(let i = n-1;i >= 0;i--){
            index = operatorarray.indexOf('/',i)
            newnumber = numberarray[index] / numberarray[index+1]
            numberarray.splice(index,2,newnumber)
            operatorarray.splice(index,1)}
        if(!(operatorarray.indexOf('*')=='-1')){
            let n = operatorarray.filter(x => x == '*').length
            for(let i = n-1;i >= 0;i--){
            index = operatorarray.indexOf('*',i)
            newnumber = numberarray[index] * numberarray[index+1]
            numberarray.splice(index,2,newnumber)
            operatorarray.splice(index,1)}}      
        }
    else{
        if(!(operatorarray.indexOf('*')=='-1')){

            let n = operatorarray.filter(x => x == '*').length
            for(let i = n-1;i >= 0;i--){
            index = operatorarray.indexOf('*',i)
            newnumber = numberarray[index] * numberarray[index+1]
            numberarray.splice(index,2,newnumber)
            operatorarray.splice(index,1)}}     
    }
    if(!(operatorarray.indexOf('+')=='-1')){

        let n = operatorarray.filter(x => x == '+').length
        for(let i = n-1;i >= 0;i--){
        index = operatorarray.indexOf('+',i)
        newnumber = numberarray[index] + numberarray[index+1]
        numberarray.splice(index,2,newnumber)
        operatorarray.splice(index,1)}}    

    else{}
    if(!(operatorarray.indexOf('-')=='-1')){

        let n = operatorarray.filter(x => x == '-').length
        for(let i = n-1;i >= 0;i--){
        index = operatorarray.indexOf('-',i)
        newnumber = numberarray[index] - numberarray[index+1]
        numberarray.splice(index,2,newnumber)
        operatorarray.splice(index,1)}}   

    else{}
    operation = [`${numberarray}`]
    display.textContent = operation
    }