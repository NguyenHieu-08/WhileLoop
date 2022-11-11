let number = 0;
let result = document.getElementById('result');
let sum = 0;

while (number != -1) {
    number = Number(prompt("Nhập số:"));
    alert(number);
    sum += number
}
result.innerHTML = sum + 1;
