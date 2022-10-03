// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User (id, name, surName, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surName = surName;
//     this.email = email;
//     this.phone = phone;
// }

// let array = [];
//
// let user1 = new User(1, 'Vasya', 'Vasya', 'asdqwe', 123321);
// let user2 = new User(2, 'Vasya', 'Vasya', 'asdqwe', 123321);
// let user3 = new User(3, 'Vasya', 'Vasya', 'asdqwe', 123321);
// let user4 = new User(4, 'Vasya', 'Vasya', 'asdqwe', 123321);
// let user5 = new User(5, 'Vasya', 'Vasya', 'asdqwe', 123321);
// let user6 = new User(6, 'Vasya', 'Vasya', 'asdqwe', 123321);
// let user7 = new User(7, 'Vasya', 'Vasya', 'asdqwe', 123321);
// let user8 = new User(8, 'Vasya', 'Vasya', 'asdqwe', 123321);
// let user9 = new User(9, 'Vasya', 'Vasya', 'asdqwe', 123321);
// let user10 = new User(10, 'Vasya', 'Vasya', 'asdqwe', 123321);
//
// array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(array);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = array.filter(value => value.id % 2 === 0);
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = array.sort((a, b) => a.id - b.id);
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class User{
//     constructor(id, name, surName, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surName = surName;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let array = [];
//
// let user1 = new User(1, 'Vasya', 'Vasya', 'asdqwe', 123321, [1, 2, 3]);
// let user2 = new User(2, 'Vasya', 'Vasya', 'asdqwe', 123321, [11, 22, 36]);
// let user3 = new User(3, 'Vasya', 'Vasya', 'asdqwe', 123321, [31, 72, 63]);
// let user4 = new User(4, 'Vasya', 'Vasya', 'asdqwe', 123321, [12, 62]);
// let user5 = new User(5, 'Vasya', 'Vasya', 'asdqwe', 123321, [16, 68]);
// let user6 = new User(6, 'Vasya', 'Vasya', 'asdqwe', 123321, [66, 32]);
// let user7 = new User(7, 'Vasya', 'Vasya', 'asdqwe', 123321, [83, 88]);
// let user8 = new User(8, 'Vasya', 'Vasya', 'asdqwe', 123321, [61, 81, 6]);
// let user9 = new User(9, 'Vasya', 'Vasya', 'asdqwe', 123321, [53, 92]);
// let user10 = new User(10, 'Vasya', 'Vasya', 'asdqwe', 123321, [57, 4]);
//
// array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(array);
// let sortArray = array.sort((a, b) => a.order.length - b.order.length);
// console.log(sortArray);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, producer, year, maxSpeed, engine){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//     }
//
//     this.info = function (){
//         for (const item in this) {
//             if (typeof this[item] !== "function"){
//                 console.log(`${item} -- ${this[item]}`);
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let kia = new Car('Kia', 'Korea', 2000, 200, 2.6 );
// console.log(kia);
// kia.drive();
// kia.info();
// kia.increaseMaxSpeed(50);
// kia.addDriver({name: 'Vasya', age: 22})
// kia.changeYear(2005);
// console.log(kia);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car{
//     constructor(model, producer, year, maxSpeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//     }
//
//     info(){
//         for (const item in this) {
//             if (typeof this[item] !== "function"){
//                 console.log(`${item} -- ${this[item]}`);
//             }
//         }
//     }
//
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//
//     addDriver(driver){
//         this.driver = driver;
//     }
// }
//
// let kia = new Car('Kia', 'Korea', 2000, 200, 2.6 );
//
// console.log(kia);
// kia.drive();
// kia.info();
// kia.increaseMaxSpeed(70);
// kia.addDriver({name: 'Petya', age: 32})
// // kia.changeYear(2005);
// console.log(kia);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Cinderella{
//
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let Cinderella1 = new Cinderella('Alina', 19, 37);
// let Cinderella2 = new Cinderella('Anna', 22, 36);
// let Cinderella3 = new Cinderella('Julia', 20, 34);
// let Cinderella4 = new Cinderella('Natalya', 24, 38);
// let Cinderella5 = new Cinderella('Oksana', 42, 37);
// let Cinderella6 = new Cinderella('Olha', 31, 39);
// let Cinderella7 = new Cinderella('Ira', 26, 36);
// let Cinderella8 = new Cinderella('Marta', 22, 35);
// let Cinderella9 = new Cinderella('Polina', 28, 37);
//
// let array = [Cinderella1, Cinderella2, Cinderella3, Cinderella4, Cinderella5, Cinderella6, Cinderella7, Cinderella8, Cinderella9];
// console.log(array);
//
// class Prince extends Cinderella{
//     constructor(name, age, findFootSize) {
//         super(name, age);
//         this.findFootSize = findFootSize;
//     }
// }
//
// let prince = new Prince('Vasya', 22, 34);
//
// let find = (array, prince) =>{
//     for (const item of array) {
//         if (prince.findFootSize === item.footSize){
//             return `My Cinderella is ${item.name}`
//         }
//     }
// }
// console.log(find(array, prince));
//
// let cenderella = array.find(value => prince.findFootSize === value.footSize);
// console.log(cenderella);