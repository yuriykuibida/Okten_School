// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = 1;
// let a = 0;
// let a = -3;
// let x = +a;
// if (x !== 0){
//     document.write('Вірно');
// } else {
//     document.write('Невірно');
// }


//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
//
// let time = +prompt('enter your number');
// if (time >= 1 && time <= 59){
//     if (time >= 1 && time <=15){
//         console.log('First Quarter');
//     } else if (time >= 16 && time <=30) {
//         console.log('Second Quarter');
//     } else if (time >= 31 && time <=45) {
//         console.log('Third Quarter');
//     } else {
//         console.log('Fourth Quarter')
//     }
// } else {
//     console.log('??????????');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = +prompt('enter day');
// if (day >= 1 && day <= 31){
//     if (day >= 1 && day <= 10){
//         console.log('First Decade');
//     } else if (day >= 11 && day <= 20){
//         console.log('Second Decade');
//     } else {
//         console.log('Third Decade');
//     }
// } else {
//     console.log('????????????');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let day = +prompt('Day number');
// switch (day){
//     case 1:
//         console.log('Monday');
//         break;
//     case  2:
//         console.log('Tuesday');
//         break;
//     case  3:
//         console.log('Wednesday');
//         break;
//     case  4:
//         console.log('Thursday');
//         break;
//     case  5:
//         console.log('Friday');
//         break;
//     case  6:
//         console.log('Saturday');
//         break;
//     case  7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('????????');
// }

//
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let n1 = +prompt('Number 1');
// let n2 = +prompt('Number 2');
// if (n1 > n2){
//     console.log(n1);
// } else if (n1 < n2){
//     console.log(n2);
// } else {
//     console.log(n1 + '=' + n2);
// }


//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = NaN || 'default';
// // x = 'string';
// // x = 25;
// // x = undefined;
// // x = null;
// if(false || !x){
//     x = 'default'
// }
// console.log(x)
