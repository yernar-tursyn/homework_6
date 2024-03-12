//=================
// Task 1
// function converter () {

//     const number = prompt('Введите цифру в Цельсий');
    
//     const formula = (number*9 / 5) + 32; 
    
//     console.log(formula);

// }

// converter();

// Task 2

// function validator() {
    
//     const inputNumber = prompt('Введите целое число');
//     const parsedInput = parseInt(inputNumber);
    
//     if (inputNumber < 0) {
//         console.log('Вы ввели отрицательное число');
//     } else if (inputNumber > 0) {
//         console.log('Вы ввели положительное число');
//     } else if (inputNumber == 0) {
//         console.log('Вы ввели ноль');
//     } else if (isNaN(parsedInput)) {
//         console.log('Вы ввели не число');
//     } else if (inputNumber === null) {            не работает
//         console.log('Вы нажали "Отмена"');
//     }
// }

// validator();


// Task 3


// function multiply() {

//     const firstNumber = prompt('Число 1');
//     const secondNumber = prompt('Число 2');

//     if (firstNumber === undefined || secondNumber === undefined) {
//         console.log('Ошибка: оба параметра обязательны.');
//     }
//     const mul = firstNumber * secondNumber;

//     console.log(mul);

// }

// multiply();


// Task 4


function pow() {
    
    const firstNumber = prompt('Число');
    const secondNumber = prompt('Степень');
    
    const secondNumberN = secondNumber;
    
    const pow = firstNumber * (secondNumber*secondNumberN);

    return pow;
}

// pow();
   
  



