function getHistory(){
    return document.getElementById("history-value").innerHTML;
}

function printHistory(num){
     document.getElementById("history-value").innerText = num;
}

function getOutput(num){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){
    if(num == ""){
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    let n = Number(num);
    let value = n.toLocaleString("en")
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g, ''));
}

let operator = document.getElementsByClassName("operator");
for(var i = 0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
       if(this.id == 'clear'){
           printHistory("");
           printOutput("");
       }
       if(this.id == 'backspace'){
        let output = reverseNumberFormat(getOutput()).toString();
        if(output){
            output = output.substr(0,output.length-1);
            printOutput(output);
        }
    }
    })
}

let number = document.getElementsByClassName("number");
for(var i = 0; i<number.length; i++){
    number[i].addEventListener('click', function(){
       let output = reverseNumberFormat(getOutput());
       if(output != NaN){
           output += this.id;
           printOutput(output);
       }
    })
}
