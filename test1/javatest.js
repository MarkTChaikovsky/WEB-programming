let n = parseInt(prompt("Кількість елементів: ", ""))
let a = [];
for (let i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * 10);
}
let b = a.filter(function(number)
{
    return number > a[0];
});
alert(`масив: ${a}`);
alert(`масив після зміни: ${b}`);

//------------------------------------------------------------------------------

let paragraph = document.getElementById("l1").value;
let firstNumber = document.getElementById("1Number").value = Math.floor(Math.random() * 10);
let secondNumber = document.getElementById("2Number").value = Math.floor(Math.random() * 10);

let sum = firstNumber+secondNumber;


document.getElementById("Check").onclick = () => {
    let answer = parseInt(document.getElementById("Answer").value);
    if (answer == sum){
        paragraph.textContent += "Ok";
    }
    else{
        paragraph.textContent += "Nope";
    }
}

