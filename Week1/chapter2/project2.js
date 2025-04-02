let miles = 50;
let kilometers = miles * 1.60934;

console.log(`${kilometers} kilometers is equal to ${miles} miles.`)

let inch = 72;
let centimeters = inch * 2.54;
let kilo = 68;
let pounds = kilo * 2.2046

console.log(`${inch} inches is equal to ${centimeters} centimeters.`);
console.log(`${pounds} pounds is equal to ${kilo} kilometers.`);

let bmi = kilo/(centimeters/100)**2;
console.log(`BMI: ${bmi}`);
