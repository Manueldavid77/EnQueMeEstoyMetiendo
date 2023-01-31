var factorial = 1
for (let i = 10; i > 0; i--) {
    factorial *= i
}
console.log(factorial)

var factorial = 1
var num = 10
while (num > 1) {
    factorial *= num
    num--
}
console.log(factorial)


var factorial = 1
var num = 10
while (true) {
    factorial *= num
    num--
    if (num === 1) break
}
console.log(factorial)