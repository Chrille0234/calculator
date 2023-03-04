var number1 = document.getElementById("1");
var number2 = document.getElementById("2");
var plus = document.getElementById("plus");
var inputField = document.getElementById("inputField");
var calcButton = document.getElementById("calculate");

number1.addEventListener("click", function() {
  addText(1);
});
number2.addEventListener("click", function() {
    addText(2);
  });
plus.addEventListener("click", function() {
  addText("+");
});

function addText(symbol){
    inputField.value += symbol;
}

calcButton.addEventListener("click", function() {
    // fjerne plusserne fra udregningen
    let calculate = inputField.value;
    calculate = calculate.split("+")

    // laver alle tallene om til integers
    for(let i = 0; i < calculate.length; i++){
        calculate[i] = parseInt(calculate[i])
    }

    // udregningen
    let sum = 0;
    for (let i = 0; i < calculate.length; i++){
        sum += calculate[i]
    }
    inputField.value = sum

    
})
inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
          // fjerne plusserne fra udregningen
    let calculate = inputField.value;
    calculate = calculate.split("+")

    // laver alle tallene om til integers
    for(let i = 0; i < calculate.length; i++){
        calculate[i] = parseInt(calculate[i])
    }

    // udregningen
    let sum = 0;
    for (let i = 0; i < calculate.length; i++){
        sum += calculate[i]
    }
    inputField.value = sum
    }
});