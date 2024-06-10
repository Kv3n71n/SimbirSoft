// Первое упражнение
console.log("-----------------");
console.log("Первое упражнение");
console.log("-----------------");

let a;
a = 5; 
if (a > 3 && a < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}
 
// Второе упражнение
console.log("-----------------");
console.log("Второе упражнение");
console.log("-----------------");

let a2;

a2 = 5; // Проверка для a2 = 5
if (a2 === 0 || a2 === 2) {
  a2 += 7;
} else {
  a2 /= 10;
}
console.log(a2);

a2 = 0; // Проверка для a2 = 0
if (a2 === 0 || a2 === 2) {
  a2 += 7;
} else {
  a2 /= 10;
}
console.log(a2);

a2 = -3; // Проверка для a2 = -3
if (a2 === 0 || a2 === 2) {
  a2 += 7;
} else {
  a2 /= 10;
}
console.log(a2);

a2 = 2; // Проверка для a2 = 2
if (a2 === 0 || a2 === 2) {
  a2 += 7;
} else {
  a2 /= 10;
}
console.log(a2);
 
// Третье упражнение
console.log("-----------------");
console.log("Третье упражнение");
console.log("-----------------");

let num;
let result;

num = 1; // Проверка для num = 1
switch (num) {
  case 1:
    result = 'зима';
    break;
  case 2:
    result = 'весна';
    break;
  case 3:
    result = 'лето';
    break;
  case 4:
    result = 'осень';
    break;
  default:
    result = 'Некорректный число (Введите число от 1 до 4)';
}
console.log(result);
 
// Четвертое упражнение
console.log("-----------------");
console.log("Четвертое упражнение");
console.log("-----------------");

let day;
let decade;

day = 10; // Проверка для day = 10
if (day <= 10) {
  decade = 'первая';
} else if (day <= 20) {
  decade = 'вторая';
} else {
  decade = 'третья';
}
console.log(decade);

day = 25; // Проверка для day = 25
if (day <= 10) {
  decade = 'первая';
} else if (day <= 20) {
  decade = 'вторая';
} else {
  decade = 'третья';
}
console.log(decade);

day = 5; // Проверка для day = 5
if (day <= 10) {
  decade = 'первая';
} else if (day <= 20) {
  decade = 'вторая';
} else {
  decade = 'третья';
}
console.log(decade);
 
// Пятое упражнение
console.log("-----------------");
console.log("Пятое упражнение");
console.log("-----------------");

let month;
let season;

month = 12; // Проверка для month = 12
switch (month) {
  case 12:
  case 1:
  case 2:
    season = 'зима';
    break;
  case 3:
  case 4:
  case 5:
    season = 'весна';
    break;
  case 6:
  case 7:
  case 8:
    season = 'лето';
    break;
  case 9:
  case 10:
  case 11:
    season = 'осень';
    break;
  default:
    season = 'Некорректный номер месяца';
}
console.log(season);

month = 7; // Проверка для month = 7
switch (month) {
  case 12:
  case 1:
  case 2:
    season = 'зима';
    break;
  case 3:
  case 4:
  case 5:
    season = 'весна';
    break;
  case 6:
  case 7:
  case 8:
    season = 'лето';
    break;
  case 9:
  case 10:
  case 11:
    season = 'осень';
    break;
  default:
    season = 'Некорректный номер месяца';
}
console.log(season);

month = 4; // Проверка для month = 4
switch (month) {
  case 12:
  case 1:
  case 2:
    season = 'зима';
    break;
  case 3:
  case 4:
  case 5:
    season = 'весна';
    break;
  case 6:
  case 7:
  case 8:
    season = 'лето';
    break;
  case 9:
  case 10:
  case 11:
    season = 'осень';
    break;
  default:
    season = 'Некорректный номер месяца';
}
console.log(season);

// Шестое упражнение
console.log("-----------------");
console.log("Шестое упражнение");
console.log("-----------------");

let str = 'abcde';
if (str.charAt(0) === 'a') {
  console.log('да');
} else {
  console.log('нет');
}
