let name = prompt("І'мя: ", "Юрій");
let a = ["Юрій","Юрій","Юрій","Юрій","1","1","1"]
alert(`Кількість імен: ${a.filter(el => el === name).length}`);