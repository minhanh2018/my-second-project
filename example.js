// let inputWidth;
// let inputWeight;
//
// inputWidth = prompt("Input width: ");
// inputWeight = prompt("Input weight: ");
//
// let width = parseInt(inputWidth);
// let weight = parseInt(inputWeight);
//
// let area = width * weight;
//
// document.writeln("Area = " + area);

// let i = 10;
// let f = 20.5;
// let b = true;
// let s = 'Hà Nội';
//
// document.writeln('i = ' + i);
// document.writeln('</br>');
// document.writeln('b = ' + b);
// document.writeln('</br>');
// document.writeln('f = ' + f);
// document.writeln('</br>');
// document.writeln('s = ' + s);

// let width = parseInt(prompt("Input width"));
// let height = parseInt(prompt("Input height"));
// let area = width * height;
// alert('Area = ' + area);

// let firstNumber = parseInt(prompt("Input first number:"));
// let secondNumber = parseInt(prompt("Input second number: "));
//
//     if(firstNumber % secondNumber === 0) {
//         alert(firstNumber + " is multiple of " + secondNumber);
//     } else {
//         alert(firstNumber + " is not multiple of " + secondNumber);
//     }

// 1 - AVERAGE GRADE
// let physical = parseInt(prompt("Input physical grade: "));
// let math = parseInt(prompt("Input math grade: "));
// let biology = parseInt(prompt("Input biology grade: "));
//
// if(physical < 0 && math < 0 && biology < 0) {
//     alert("Wrong input");
// } else {
//     let average = (physical + math + biology)/3;
//     alert("Average grade: " + average);
// }

// 2 - C TO F
// let celsius = parseInt(prompt("Celsius: "));
// let fahrenheit = parseInt(celsius * 9 / 5 + 32);
// alert('Fahrenheit  = ' + fahrenheit);

// 3
// let radius = parseInt(prompt('Input radius: '));
// let s = radius * radius * Math.PI;
// let p = radius * 2 * Math.PI;
// alert('S = ' + s + ' and P = ' + p);


function convertMoney() {
    let money = document.getElementById("money").value;
    let amount = parseInt(money);
    let firstSelect = document.getElementById("from-currency").value;
// let fromCurrency = firstSelect.options[firstSelect.selectedIndex].value;
    let secondSelect = document.getElementById("to-currency").value;
    if (isNaN(amount)) {
        alert("Input money !");
    }
    if (firstSelect === "Vietnam Dong" && secondSelect === "USD") {
        amount /= 23000;
    }
    if ((firstSelect === "Vietnam Dong" && secondSelect === "Vietnam Dong") || (firstSelect === "USD" && secondSelect === "USD")) {
        amount = amount;
    }
    if (firstSelect === "USD" && secondSelect === "Vietnam Dong") {
        amount *= 23000;
    }
    document.writeln("Result = " + amount);
    console.log(firstSelect);
}