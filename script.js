//This function deletes all the values
function clear(){
    document.getElementById("result").value = " ";
}
function clearScreen(){
    document.getElementById("result").value = " ";
}
function back(){
    var value=document.getElementById("result").value;
    document.getElementById("result").value =value.substr(0,value.length-1);
}

//this function display values
function display(value) {
    document.getElementById("result").value +=value;
}

//this function  evalutaes the  expression  and teturns the result
function calculate(){
    var p=document.getElementById("result").value;
    var q=eval(p);
    document.getElementById("result").value = q;
}