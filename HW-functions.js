/* 1 Завдання
Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

function meal(hamburger,fries) {
    if (hamburger >= 4 && fries >=1) {
      console.log('Ми поїли');
    } else {
        console.log('Ми йдемо в інше кафе')
    }}

    meal(3,1)

/* 2 Завдання 
Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
Результат виводити в консоль. */


function result(price){

    if(price >= 1000 && price <= 1900)
    {
        console.log('perfect');}
    else {
        console.log('out of borders')
    }}

result(100)

/*3 Завдання 
Напишіть конструкцію if, що перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно. 
Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
Результат виводити в консоль.
*/

function result(price1){
if (price1 >= 1000 && price1 <= 1900){
    console.log('Ok price')
} else if (!price1 >= 1000 || !price1 <=1900 ){
    console.log("Not enough money")
}}

result(2000)

/*4 Завдання 
За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if. 
Результат виводити в консоль */


function result(Season){

if (Season === 1){
    console.log('Зима')
} else if (Season === 2){
    console.log('Весна')
} else if (Season === 3){
    console.log('Літо')
} else {(Season === 4)
    console.log('Осінь')
}}

result(4)


/*5. Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє між цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.*/


function result(a,b,c){

if(a < c && a > b){
    console.log(a)
}
else if(a < b && a > c){
    console.log(a)
}
else if(b < c && b > a){
    console.log(b)
}
else if(c < b && b > a){
    console.log(b)
}
else if(a < c && c > b){
    console.log(c)
}
else {
    console.log(c)
}}

result(2000,89,100)



/*6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.*/

    function result(number){
    switch(number){
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break; 
        case 4:
            console.log('Thursday');
            break; 
        case 5:
            console.log('Friday');
            break; 
        case 6:
            console.log('Saturday');
            break; 
        case 7:
            console.log('Sunday');
            break; 
    }}
result(1)

/*7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.*/

function result(q){
    switch(q){
    case `*`: 
        console.log(result=6*2);
        break;
    case `+`: 
        console.log(result=6+2);
        break;
    case `-`: 
        console.log(result=6-3);
        break;
    case `/`: 
        console.log(result=6/3);
        break;
   }}

   result('*')


/* 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.*/


function result (a) {
    console.log(a.replace(/[aeiouy]/gi, ''))
}
result ('tomorrow')


/*9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.*/


function paramter (meters)  {
    let kilometers = meters/1000
 
 function ending (meters) {
     if(Number.isInteger(meters)) {
        let length = meters%10;
     if (length == 0 || (meters%1 == 0 && meters >= 11 && meters <= 19)) {end = "ів"
     } else if (length == 1) {end = ""
     } else if (length >= 2 && length <=4) {end = "и"
     } else if (length >= 5 && length <=9) {end = "ів"
     }
     } else {end = "a"
        } return end
        }
             console.log(`${meters} метр${ending(meters)} = ${kilometers} кілометр${ending(kilometers)}`);
            }
 
        paramter (200,00);