// Первое упражнение 
console.log("-----------------");
console.log("Первое упражнение");
console.log("-----------------");

let a = "Привет, Simbirsoft";
let b = 2022;
let c = true;
let d = "false";

console.log(`Переменная 'a' типа: ${typeof a}`); 
console.log(`Переменная 'b' типа: ${typeof b}`); 
console.log(`Переменная 'c' типа: ${typeof c}`); 
console.log(`Переменная 'd' типа: ${typeof d}`);

// Второе упражнение
console.log("-----------------");
console.log("Второе упражнение");
console.log("-----------------");
let str1 = 'Привет, ';
let str2 = 'Мир!';

console.log(str1 + str2);

// Третье упражнение
console.log("-----------------");
console.log("Третье упражнение");
console.log("-----------------");

let name = 'Дмитрий ';
console.log("Привет, " + name);

// Четвертое упражнение
console.log("-----------------");
console.log("Четвертое упражнение");
console.log("-----------------");

let age = 18;
console.log("Мне - " +age+ " лет");

// Пятое упражнение
console.log("-----------------");
console.log("Пятое упражнение");
console.log("-----------------");

let str = 'abcde';

console.log(str[0]); 
console.log(str[2]); 
console.log(str[4]); 

// Шестое упражнение
console.log("-----------------");
console.log("Шестое упражнение");
console.log("-----------------");

let date = new Date(); 

let hour = date.getHours(); 
let minute = date.getMinutes();
let second = date.getSeconds(); 

console.log(`${hour}:${minute}:${second}`); 



let number = 25;
let squareRoot = Math.sqrt(number);
let roundedSquareRoot = squareRoot.toFixed(3); 

console.log(roundedSquareRoot); 


// Восьмое упражнение
console.log("-----------------");
console.log("Восьмое упражнение");
console.log("-----------------");

let user = {
    id: 1,
    login: "Administrator",
    email: "admin@admin.admin",
    name: "Иванов Анатолий",
    age: 23,
    account: '125$',
    phone: '+79602542214',
    address: {
      city: 'г. Ульяновск',
      street: 'ул. Ленина',
      build: 'д.25',
      flat: 'кв.15',
    },
    isActive: true,
    role: {
      id: 1,
      title: "Администратор",
      name: "administrator",
    },
  };
  

  let currentYear = new Date().getFullYear();
  
  console.log("Имя пользователя:", user.name);
  console.log("Возраст пользователя:", user.age);
  console.log("Количество денег на счете пользователя:", parseInt(user.account.slice(0, -1)));
  console.log("Адрес пользователя:", `${user.address.city}, ${user.address.street}, ${user.address.build}, ${user.address.flat}`);
  console.log("Название роли пользователя:", user.role.title);
  console.log("Год рождения пользователя:", currentYear - user.age);
  console.log("Фамилия пользователя:", user.name.split(' ')[1]);
  