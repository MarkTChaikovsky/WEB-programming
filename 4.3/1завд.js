let n = parseInt(prompt("Кількість оцінок: "));
let a = [];
let sum = 0;
for (let i = 0; i<n; i++) {
    let el = parseInt(prompt(`Введіть ${i+1} оцінку:`));
    a.push(el);
    sum += el;
}
if (a.includes(2)) {
    alert("Двійочник");
}
else if (a.includes(3)) {
    alert("Трійочник");
}
else if ((sum / n) >= 10){
    alert("Відмінник");  
}
else {
    alert("Хорошист");
}
