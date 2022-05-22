const constructor = document.getElementById("constructor");
document.getElementById("addNews").onclick = () => {
    constructor.classList.remove("hide");
}
const constructorEdit = document.getElementById("constructorEdit");


const arrNews = [];
document.getElementById("addNewsButton").onclick = () => {
    const newsObject = new News(
        document.getElementById("code").value,
        document.getElementById("headline").value,
        document.getElementById("news_summary").value,
        document.getElementById("text").value,
        document.getElementById("publication_date").value,
        document.getElementById("views").value
    );
    document.getElementById("code").value = "";
    document.getElementById("headline").value = "";
    document.getElementById("news_summary").value = "";
    document.getElementById("text").value = "";
    document.getElementById("publication_date").value = "";
    document.getElementById("views").value = "";
    arrNews.push(newsObject);
    constructor.classList.add("hide");
    render()

}

function render() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    for (let i = 0; i < arrNews.length; i++) {
        const newsObject = arrNews[i];
        const tr = document.createElement("tr")
        const code = createTd(newsObject.code)
        const headline = createTd(newsObject.headline)
        const news_summary = createTd(newsObject.news_summary)
        const publication_date = createTd(newsObject.publication_date)
        const views = createTd(newsObject.views)
        const buttonPlace = document.createElement("td")
        const editButton = document.createElement("button")
        editButton.innerText = "редагувати"
        const deleteButton = document.createElement("button")
        deleteButton.innerText = "видалити"
        deleteButton.addEventListener("click", () => {
            arrNews.splice(i, 1)
            render()
        })
        editButton.addEventListener("click", () => {
            constructorEdit.classList.remove("hide")
            edit(i)
        })
        buttonPlace.appendChild(editButton)
        buttonPlace.appendChild(deleteButton)

        tr.appendChild(code)
        tr.appendChild(headline)
        tr.appendChild(news_summary)
        tr.appendChild(publication_date)
        tr.appendChild(views)
        tr.appendChild(buttonPlace)
        tableBody.appendChild(tr)
    }

}

function createTd(name) {
    const el = document.createElement("td")
    el.innerText = name;
    return el;
}

function edit(i) {
    const newsObject = arrNews[i];

    document.getElementById("code2").value = newsObject.code
    document.getElementById("headline2").value = newsObject.headline
    document.getElementById("news_summary2").value = newsObject.news_summary
    document.getElementById("text2").value = newsObject.text
    document.getElementById("publication_date2").value = newsObject.publication_date
    document.getElementById("views2").value = newsObject.views

    document.getElementById("addNewsButton2").onclick = () => {
        constructorEdit.classList.add("hide")
        newsObject.code = document.getElementById("code2").value
        newsObject.headline = document.getElementById("headline2").value
        newsObject.news_summary = document.getElementById("news_summary2").value
        newsObject.text = document.getElementById("text2").value
        newsObject.publication_date = document.getElementById("publication_date2").value
        newsObject.views = document.getElementById("views2").value
        render()
    }
}
