
 var inputValue;
function factorialNo() { // Calculates the factorial of a number when an event specified in the 
    // addEventListener method occurs.
    inputValue = document.getElementById('input-no').value;
   var factorial = 1;
    for (var i = 1; i <= inputValue; i++) {
        factorial = factorial * i;
    }
    document.getElementById('display-panel').innerText = factorial;
}
document.querySelector('#calcFactorial').addEventListener('click', factorialNo);//Listens to the click event on the 
// specified element and calls the func.'factorialNo'
function isNumber(event) {
    var charcode = event.charCode;
    if (charcode < 46 || charcode > 57) {
        document.querySelector('#display-panel').style.color = 'red';
        document.querySelector('#display-panel').innerHTML = 'Invalid Number !';
    }
    else
        document.querySelector('#display-panel').innerHTML = '';
}
document.querySelector('#input-no').addEventListener('keypress', isNumber);
function reset() {
    factorial = 0;
    document.getElementById('display-panel').innerText = '';
    document.getElementById('input-no').value = '';

}
document.querySelector('#Reset-button').addEventListener('click', reset);
