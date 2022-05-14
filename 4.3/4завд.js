function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
} 
let a = [];
let b = [];
let win_sum = 0;
for (let i = 0; i<10; i++) {
    let el = parseInt(`${getRandomInt(-500, 500)} `);
    a.push(el);
}
alert(a);
while (true) {
    let answear = parseInt(prompt("Введіть позицію від 1 до 10 щоб продовжити. Щоб закінчити, введіть іншу цифру"))
    if (answear >= 1 && 10 >= answear) {
        if (b.includes(answear - 1)) {
            alert("Ця цифра вже використана");
            continue;
        }
        else {
            b.push(answear - 1);
            win_sum += a[answear - 1]
            alert(`Виграш: ${win_sum}`);
        }   
    }
    else {
        break;
    }   

}

alert(`Остаточний виграш: ${win_sum}`);
