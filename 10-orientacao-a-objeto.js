//var obj = new Object();
//var obj = {}

var obj = {
    name: {
        first: 'Gadalf',
        last: 'the Grey'
    },
    address: 'Middle Earth'
}

//Construtor
function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn
    this.printPages = function () {
        console.log(this.pages);
    }
}

var book = new Book('O Hobbit', '200', 'isbn')
console.log(book.title);

book.title = 'O Senhor dos Aneis' //atualizando o valor do titulo
console.log(book.title);

//Criando metodos
Book.prototype.printTitle = function () {
    console.log(this.title);
}

book.printTitle()

book.printPages()

