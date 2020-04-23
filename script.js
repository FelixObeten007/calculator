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
    if(num == "-"){
        return "";
    }
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
    else{
        let output = getOutput();
        let history = getHistory();
        if(output == "" && history !== ""){
            if(isNaN(history[history.length-1])){
                history = history.substr(0, history.length-1);
            }
        }
        if(output != "" || history != ""){
            output = output == ""
                ? output: reverseNumberFormat(output);
            history += output;
            if(this.id == "="){
                let result = eval(history);
                printOutput(result);
                printHistory("");
            } 
            else{
                history += this.id;
                printHistory(history);
                printOutput("");
            }
        }
    } 
    if (this.id == '.'){
        output += this.id;
    }
    });
}

let number = document.getElementsByClassName("number");
for(var i = 0; i<number.length; i++){
    number[i].addEventListener('click', function(){
       let output = reverseNumberFormat(getOutput());
       if(output != NaN){
           output += this.id;
           printOutput(output);
       }
    });
}
