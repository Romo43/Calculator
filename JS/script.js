var buttons = document.querySelectorAll('button');
var display = document.querySelector('.display');

buttons.forEach(function (button){
    button.addEventListener('click', calculate);
});

function calculate(event){
    var ClickedButtonValue = event.target.value;
        if(ClickedButtonValue === '='){
            if(display !== ''){
                display.value = eval(display.value);
            }
        }else if(ClickedButtonValue === 'C'){
            display.value = '';
        }else{
            display.value += ClickedButtonValue;
        }
}