// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// []()

let superLink = document.getElementById('super_link');
console.log(superLink);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()

const cardLinks = document.querySelectorAll('.card-link');
for (let i = 0; i < cardLinks.length; i++) {
    cardLinks[i].textContent = 'ссылка';
}

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()

let cardLinks = document.querySelectorAll('.card-body .card-link');
console.log(cardLinks);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()

let element = document.querySelector('[data-number="50"]');
console.log(element);

// 5. Выведите содержимое тега title в консоль.
// []()

let title = document.querySelector('.card-title').innerText;
console.log(title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()

let cardTitle = document.querySelector('.card-title');
console.log(cardTitle.parentNode);

// 7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

let card = document.querySelector('.card');
let p = document.createElement('p');
p.innerText = 'Привет';
card.prepend(p);

// 8. Удалите тег h6 на странице.

let h6 = document.querySelector('.card-subtitle mb-2 text-muted');
h6.removeChild('.card-subtitle mb-2 text-muted');
