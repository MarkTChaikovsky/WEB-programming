//10. Об’єкт “Новини” (Код, заголовок новини, короткий зміст новини, текст новини, дата публікації, кількість переглядів). Запит на новини з кількістю переглядів не менше Х, за вказану дату  .


class News {
  constructor(code, headline, news_summary, text, publication_date, views) {
    this.code = code;
    this.headline = headline;
    this.news_summary = news_summary;
    this.text = text;
    this.publication_date = publication_date;
    this.views = views;

  }
  ToString() {
    return `
            Код: ${this.code}
            заголовок новини: ${this.headline}  
            короткий зміст новини: ${this.news_summary} 
            текст новини: ${this.text}  
            дата публікації: ${this.publication_date} 
            кількість переглядів: ${this.views}
        `;
  }
}


class AllNews {
  constructor() { this.all_news = []; }

  FindByCode(code2) { return this.all_news.find((element) => element.code == code2); }

  FindByViews(views2) { return this.all_news.filter((element) => parseInt(element.views) >= parseInt(views2)); }

  FindByDate(date) { return this.all_news.filter((element) => element.publication_date == date); }

  GetInfo(code2) { return this.FindByCode(code2).ToString(); }

  AddElement(element) { this.all_news.push(element); }

  AddElements(elements) {
    elements.array.forEach(element => {
      this.all_news.push(element)
    });
  }

  Edit(code2, edit_el) { this.all_news[code2] = edit_el; }

  Delete(code2) {
    let delete_el = this.all_news.findIndex((element) => element.code == code2);
    if (delete_el == -1) throw "Неможливо знайти";
    this.all_news.splice(delete_el, 1, "невідомо");
  }
}




