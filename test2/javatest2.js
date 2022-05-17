/* 
ВАРІАНТ 2

1. Використовуючи створити:
a. Об’єкт для зберігання даних про фільм (Id, назва, режисер,
продюсер, список акторів, URL-трейлеру, рік випуску, касові збори).
b. На основі об’єкту фільму створити новий об’єкт, який перевизначає
метод toString()
c. Об’єкт для зберігання даних про колекцію фільмів, цей об’єкт
повинен містити конструктор та метод для знаходження фільму з
найбільшими касовими зборами.
d. Відобразити дані про фільм з найбільшими касовими зборами на
сторінці.*/


class Film {
    constructor(id, title, director, producer, list_of_actors, URL_trailer, year_of_release, sales) { //(Id, title, director, producer, list of actors, URL-trailer, year of release, sales).
        this.id = id;
        this.title = title;
        this.director = director;
        this.producer = producer;
        this.list_of_actors = list_of_actors;
        this.URL_trailer = URL_trailer;
        this.year_of_release = year_of_release;
        this.sales = sales;
    }
}

class StringToFilm extends Film {
    toString() {
        return `
            ID: ${this.id},
            Назва: ${this.title},
            Режисер: ${this.director},
            Продюсер: ${this.producer},
            Актори: ${this.list_of_actors},
            трейлер: ${this.url},
            Дата релізу: ${this.year_of_release},
            касові збори: ${this.sales};
        `;
    }
}

class FilmCollection {
    constructor(items = []) {
        this.items = items;
    }
    MaxSalesFilm() {
        let max = 0;
        let name;
        for (let i = 0; i < this.items.length; i++) {
            if (parseInt(this.items[i].sales) > max) {
                max = parseInt(this.items[i].sales);
                name = this.items[i];
            }
        }
        return name.toString();
    }
}
document.getElementById("button1").onclick = () => {
    document.getElementById("root").innerHTML = `
    <input id="id1" type="number"> <br>
    <input id="title1" type="text"> <br>
    <input id ="director1" type="text"> <br>
    <input id ="producer1" type="text"> <br>
    <input id="list_of_actors1" type="text"> <br>
    <input id="URL_trailer1" type="text"> <br>
    <input id="year_of_release1" type="number"> <br>
    <input id="sales1" type="number"> <br>
    <button id="add-button" >add</button>
    `

    document.getElementById("add-button").onclick = () => {
        let id = document.getElementById("id1").value
        let title = document.getElementById("title1").value
        let director = document.getElementById("director1").value
        let producer = document.getElementById("producer1").value
        let list_of_actors = document.getElementById("list_of_actors1").value
        let URL_trailer = document.getElementById("URL_trailer1").value
        let year_of_release = document.getElementById("year_of_release1").value
        let sales = document.getElementById("sales1").value
        document.getElementById("films").innerHTML += `
        <p>ID: ${id}</p>
        <p>Назва: ${title}</p>
        <p>Режисер: ${director}</p>
        <p>Продюсер: ${producer}</p>
        <p>Актори: ${list_of_actors}</p>
        <p>трейлер: ${URL_trailer}</p>
        <p>Дата релізу: ${year_of_release}</p>
        <p>касові збори: ${sales}</p>
        `
    }
}
let Film1 = new StringToFilm(1, "Титанік", "Грюгоренко Михайло Андрійович", "Іван", "Петя,Паша,Льоша,Саша", "https://upload.wikimedia.org/wikipedia/uk/3/3f/Tytanik_%28UKR_Poster%2C_2012%29.jpg", "1997", "350000");
let Film2 = new StringToFilm(2, "Бетмен", "Грюгоренко Сергій Андрійович", "Мет Рівс", "Роберт,Зої,Полдано,Джефрі Райт", "https://fwcdn.pl/fpo/63/18/626318/7998475.3.jpg", "2022", "1000000");
let all = new FilmCollection([Film1, Film2]);
console.log(all.MaxSalesFilm());