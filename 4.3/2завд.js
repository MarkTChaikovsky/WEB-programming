let a = []; 
let sum = 0;
for (let i=0; i<7; i++) {
    let el = parseInt(prompt(`Кількість людей в ${i+1}-ий день: `));
    a.push(el);
}
for (let i=0; i<7; i++) {
    if (a[i] < 20) {
        alert(`Дні, коли людей менше 20: ${i+1}`);
    }
}
let min = a[0];
let min_day = 1;
let max = a[0];
let max_day = 1;

for (let i=1; i<7; i++) {
    if (a[i] < min) {
        min = a[i];
        min_day = i+1;
    }
    if (a[i] > max) {
        max = a[i];
        max_day = i+1;
    }
}
alert(`Коли кількість відвідувачів була мінімальною: ${min_day} день; людей: ${min}`);
alert(`Коли кількість відвідувачів була максимальною: ${max_day} день; людей: ${max}`);
for (let i=0; i<5; i++) {sum += a[i];}
alert(`Загальна кількість клієнтів у робочі дні: ${sum}`);
alert(`Людей в суботу: ${a[5]}; Людей в неділю: ${a[6]}`);
