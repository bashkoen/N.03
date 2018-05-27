var surname = prompt('Введите вашу фамилию');
while (surname == null || surname.length <= 1) {
  alert ("Нужно вписать фамилию, попробуйте еще раз");
  var surname = prompt('Введите вашу фамилию');
}

var firstName = prompt('Введите ваше имя');
while (firstName == null || firstName.length <= 1) {
  alert ("Нужно вписать имя, попробуйте еще раз");
  var firstName = prompt('Введите ваше имя еще раз');
}

var nameFather = prompt('Введите ваше отчество');
while (nameFather == null || nameFather.length <= 1) {
  alert ("Нужно вписать отчество, попробуйте еще раз");
  var nameFather = prompt('Введите ваше отчество');
}

var age = prompt('Введите ваш возраст');
while (age == null || age == 0 || isNaN(age)) {
  alert ("Нужно вписать реальные цифры, попробуйте еще раз");
  var age = prompt('Введите ваш возраст');
}

var gender = confirm('Ваш пол мужской? Ok - да, отмена - нет');
if (gender == true) {
  youGender = 'Мужской';
}
  else {
    youGender = 'Женский';
  }

var ageNumber = parseInt(age);
var day = age * 365;
var afterFive = ageNumber + 5;

var pension;
if (gender = "Мужской" && ageNumber < 61) {
  pension = "нет";
}
if (gender = "Женский" && ageNumber < 56) {
  pension = "нет";
}
else {
  pension = "да";
}

alert('Ваше ФИО: ' + surname + ' ' + firstName + ' ' + nameFather + ' \n'
+ 'Ваш возраст в годах: ' + age + ' \n'
+ 'Ваш возраст в днях: ' + day + ' \n'
+ 'через 5 лет вам будет: ' + afterFive + ' \n'
+ 'ваш пол: ' + youGender +' \n'
+ 'вы на пенсии: ' + pension);


console.log(gender);
console.log(youGender);
console.log(surname);
console.log(firstName);
console.log(nameFather);
console.log(typeof a);
console.log(typeof ageNumber);
console.log(typeof age);
