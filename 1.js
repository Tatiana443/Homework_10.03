// Необходимо пользователя попросить ввести температуру в градусах Цельсия,
// преобразовать введенное пользователем значение в градусах по Фаренгейту
// и вывести в alert сообщение: Цельсий: 21, Фаренгейт: 69.8

const celsius = Number.parseInt(prompt("Введите температуру в градусах Цельсия:"));
const fahrenheit = Math.floor((celsius * 9 / 5 + 32) * 100) / 100;
alert(`Цельсий: ${celsius}, Фаренгейт: ${fahrenheit}`);