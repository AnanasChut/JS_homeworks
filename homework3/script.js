// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function cube(num) {
    let res = num*num*num;
    return res;
}
console.log(cube(2) + cube(3));

// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const salary = (money) => {
    money = money * 0.87;
    return money;
}
const userMoney = Number(prompt(`Сколько ты зарабатываешь?`));
if (isNaN(userMoney)) {
    console.log('Значение задано неверно');
} else {
    console.log(`Размер заработной платы за вычетом налогов равен ${salary(userMoney)}`);
}

// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function getMaximal(num1, num2, num3) {
    if (num1 > num2, num1 > num3) {
        console.log(`Первое число ${num1} больше`);
    } else if (num2 > num1, num2 > num3) {
            console.log(`Второе число ${num2} больше`);
    } else if (num3 > num1, num3 > num2) {
        console.log(`Третье число ${num3} больше`);
    } else {
        console.log(`Числа равны`);
    }
}
getMaximal(Number(prompt("Введите первое число:")), Number(prompt("Введите второе число:")), Number(prompt("Введите третье число:")));

// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

let num1 = Number(prompt("Введите первое число: "));
let num2 = Number(prompt("Введите второе число: "));

function getSum(num1, num2) {
    let sum = num1+num2;
    return sum;
}
console.log(getSum(num1, num2));

function getDif(num1, num2) {
    if (num1 > num2) {
    let dif = num1-num2;
    console.log(dif); 
    } else if (num1 < num2) {
        let dif = num2-num1;
        console.log(dif);
    } else {
        console.log("0");
    }
}
console.log(getDif(num1, num2));

function getMult(num1, num2) {
    let mult = num1*num2;
    return mult;
}
console.log(getMult(num1, num2));

function getDiv(num1, num2) {
    let div = num1/num2;
    return div;
}
console.log(getDiv(num1, num2));