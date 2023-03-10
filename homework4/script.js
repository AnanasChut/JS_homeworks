// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
      console.log(`${i} – это ноль`);
    } else if (i % 2 === 0) {
      console.log(`${i} – четное число`);
    } else {
      console.log(`${i} – нечетное число`);
    }
  }

// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, 
// и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

let arr = [];
let sum = 0;
for (let i = 0; i < 5; i++) {
  let randomNumber = Math.floor(Math.random() * 10);
  arr.push(randomNumber);
  sum += randomNumber;
}
console.log(arr); // [2, 4, 6, 8, 9]
console.log(sum); // 29

let min = Math.min(...arr); // 2 
console.log(min); 
 
let isThreeInArray = arr.includes(3); // false 
console.log(isThreeInArray);

// Необходимо вывести горку в консоль (используя цикл for), как показано 
// на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

for (let i = 1; i <= 20; i++) {
    console.log('x'.repeat(i));
  }
