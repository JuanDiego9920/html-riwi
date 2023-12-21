/// Actividad Number y operaciones

// 1. Número a un nuevo número
let num = 36;
let newNum = Number(num);
console.log(newNum);

// 2. Rangos numéricos - Number.MAX_VALUE
console.log(Number.MAX_VALUE);

// 3. Rangos numéricos - Number.MIN_VALUE
console.log(Number.MIN_VALUE);

// 4. Rangos numéricos - Number.MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER);

// 5. Rangos numéricos - Number.MIN_SAFE_INTEGER
console.log(Number.MIN_SAFE_INTEGER);

// 6. Comprobación numérica - Number.isFinite(number)
let num = 36;
console.log(Number.isFinite(num));

// 7. Comprobación numérica - Number.isInteger(number)
let num = 36;
console.log(Number.isInteger(num));

// 8. Comprobación numérica - Number.isSafeInteger(number)
let num = 36;
console.log(Number.isSafeInteger(num));

// 9. Representación numérica - .toExponential(digits)
let num = 123456789;
console.log(num.toExponential(2));

// 10. Representación numérica - .toFixed(digits)
let num = 42.567;
console.log(num.toFixed(2));

// 11. Representación numérica - .toPrecision(size)
let num = 42.567;
console.log(num.toPrecision(4));

// 12. Convertir - Number.parseInt(text)
let text = "36";
let num = Number.parseInt(text);
console.log(num);

// 13. Convertir - Number.parseInt(text, radix)
let text = "1010";
let binaryNum = Number.parseInt(text, 8);
console.log(binaryNum);

// 14. Convertir - Number.parseFloat(text)
let text = "42.567";
let num = Number.parseFloat(text);
console.log(num);

// 15. Convertir - Number.parseFloat(text, radix)
let text = "3.14";
let num = Number.parseFloat(text);
console.log(num);

// 16. Convertir - .toString
let num = 36;
let numStr = num.toString();
console.log(numStr);

// 17. Método Math.abs(x)
let num = -36;
let absoluteNum = Math.abs(num);
console.log(absoluteNum);

// 18. Método Math.sign(x)
let num = -36;
let sign = Math.sign(num);
console.log(sign);

// 19. Método Math.exp(x)
let num = 2;
let expNum = Math.exp(num);
console.log(expNum);

// 20. Método Math.expm1(x)
let num = 2;
let expm1Num = Math.expm1(num);
console.log(expm1Num);

// 21. Método Math.max(a, b, c...)
let maxNum = Math.max(5, 8, 2, 10);
console.log(maxNum);

// 22. Método Math.min(a, b, c...)
let minNum = Math.min(5, 8, 2, 10);
console.log(minNum);

// 23. Método Math.pow(base, exp)
let result = Math.pow(2, 3);
console.log(result);

// 24. Método Math.sqrt(x)
let squareRoot = Math.sqrt(25);
console.log(squareRoot);

// 25. Método Math.cbrt(x)
let cubeRoot = Math.cbrt(8);
console.log(cubeRoot);

// 26. Método Math.imul(a, b)
let result = Math.imul(2, 3);
console.log(result);

// 27. Método Math.clz32(x)
let leadingZeros = Math.clz32(8);
console.log(leadingZeros);

// 28. Método Math.random()
let randomNum = Math.random();
console.log(randomNum);

// 29. Método de redondeo - Math.round(x)
let roundedNum = Math.round(4.5);
console.log(roundedNum);

// 30. Método de redondeo - Math.ceil(x)
let ceilNum = Math.ceil(4.2);
console.log(ceilNum);

// 31. Método de redondeo - Math.floor(x)
let floorNum = Math.floor(4.9);
console.log(floorNum);

// 32. Método de redondeo - Math.fround(x)
let froundNum = Math.fround(42.567);
console.log(froundNum);

// 33. Método de redondeo - Math.trunc(x)
let truncNum = Math.trunc(4.99);
console.log(truncNum);

// 34. Método trigonométrico - Math.sin(x)
let sinValue = Math.sin(Math.PI / 2);
console.log(sinValue);

// 35. Método trigonométrico - Math.cos(x)
let cosValue = Math.cos(Math.PI);
console.log(cosValue);

// 36. Método trigonométrico - Math.tan(x)
let tanValue = Math.tan(Math.PI / 4);
console.log(tanValue);

// 37. Método trigonométrico - Math.hypot(a, b...)
let hypotenuse = Math.hypot(3, 4);
console.log(hypotenuse);

// 38. Operadores aritméticos con .toFixed(digits), Number.parseInt(text)
let num1 = 5.678;
let num2 = "3";
let result = (num1 + Number.parseInt(num2)).toFixed(2);
console.log(result);

// 39. Operadores aritméticos con Number.parseFloat(text), .toPrecision(size)
let num1 = "7.89";
let num2 = 2;
let result = (Number.parseFloat(num1) * num2).toPrecision(3);
console.log(result);

// 40. Operadores aritméticos con Math.random(), Math.abs(x)
let randomNum = Math.random();
let result = Math.abs(randomNum - 0.5);
console.log(result);

// 41. Operadores aritméticos con Math.random(), .toString
let randomNum = Math.random();
let result = randomNum.toString();
console.log(result);

// 42. Operadores aritméticos con Math.random(), Math.exp(x)
let randomNum = Math.random();
let result = Math.exp(randomNum);
console.log(result);

// 43. Operadores aritméticos con Math.sqrt(x), Math.clz32(x)
let num = 25;
let result = Math.sqrt(num) + Math.clz32(num);
console.log(result);

// 44. Operadores de asignación con Asignación
let x = 5;
let y;
y = x;
console.log(y);

// 45. Operadores de asignación con a += b
let a = 3;
let b = 2;
a += b;
console.log(a);

// 46. Operadores de asignación con Suma y asignación
let total = 10;
let increment = 5;
total += increment;
console.log(total);

// 47. Operadores de asignación con Resta y asignación
let total = 10;
let decrement = 3;
total -= decrement;
console.log(total);

// 48. Operadores de asignación con Multiplicación y asignación
let total = 5;
let factor = 3;
total *= factor;
console.log(total);

// 49. Operadores de asignación con División y asignación
let total = 15;
let divisor = 3;
total /= divisor;
console.log(total);

// 50. Operadores de asignación con Módulo y asignación
let total = 17;
let remainder = 4;
total %= remainder;
console.log(total);

// 51. Operadores de asignación con Exponenciación y asignación
let num = 2;
num **= 3;
console.log(num);

// 52. Operadores unarios Incremento
let num = 5;
num++;
console.log(num);

// 53. Operadores unarios Decremento
let num = 8;
num--;
console.log(num);

// 54. Operadores unarios Incremento previo
let num = 5;
let result = ++num;
console.log(result);

// 55. Operadores unarios Decremento previo
let num = 8;
let result = --num;
console.log(result);

// 56. Operadores unarios Resta unaria
let num = 36;
let result = -num;
console.log(result);