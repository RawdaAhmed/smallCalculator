var add = document.getElementById('add');
add.addEventListener("click",addition);
function addition(){
    var num1 = document.getElementById('number1').value,
    num2 = document.getElementById('number2').value;
    var result = Number(num1) + Number(num2);
    if(isNaN(result))
    {
        document.getElementById('result').innerHTML = 'Write number PLZ :)';
    }
    else
    {
        document.getElementById('result').innerHTML = '<h1>The result is '+ result + '</h1>';
    }
}


var sub = document.getElementById('sub');
sub.addEventListener("click",subtraction);
function subtraction(){
    var num1 = document.getElementById('number1').value,
    num2 = document.getElementById('number2').value;
    var result = Number(num1) - Number(num2);
    if(isNaN(result))
    {
        document.getElementById('result').innerHTML = 'Write number PLZ :)';
    }
    else
    {
        document.getElementById('result').innerHTML = '<h1>The result is '+ result + '</h1>';
    }
}


var mult = document.getElementById('mult');
mult.addEventListener("click",multiplication);
function multiplication(){
    var num1 = document.getElementById('number1').value,
    num2 = document.getElementById('number2').value;
    var result = Number(num1) * Number(num2);
    if(isNaN(result))
    {
        document.getElementById('result').innerHTML = 'Write number PLZ :)';
    }
    else
    {
        document.getElementById('result').innerHTML = '<h1>The result is '+ result + '</h1>';
    }
}


var div = document.getElementById('div');
div.addEventListener("click",division);
function division(){
    var num1 = document.getElementById('number1').value,
    num2 = document.getElementById('number2').value;
    var result = Number(num1) / Number(num2);
    if(isNaN(result))
    {
        document.getElementById('result').innerHTML = 'Write number PLZ :)';
    }
    else
    {
        document.getElementById('result').innerHTML = '<h1>The result is '+ result + '</h1>';
    }
}