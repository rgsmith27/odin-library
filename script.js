const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID;

    this.info = function (){
        return(`${title}, ${author}, ${pages}, ${read}`);
    }
}

function addBookToLibrary(title, author, pages, read){
    book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks(){
    library = document.querySelector(".library");

    myLibrary.forEach((book) => {     
        newCard = createBookCard(book);
        newCard.classList.add("book-card");
        library.appendChild(newCard);
    });
}

function createBookCard(book){
    let newCard = document.createElement("div");
    
    let title = document.createElement("div");
    title.textContent =  `${book.title}`;
    title.classList.add("book-title");

    let author = document.createElement("div");
    author.textContent = `by ${book.author}`;
    author.classList.add("book-author");

    let pages = document.createElement("div");
    pages.textContent = `${book.pages} pages`;

    let readStatus = document.createElement("div");
    readStatus.textContent = `${book.read}`;

    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(readStatus);

    return newCard;
}

addBookToLibrary("Dune", "Frank Herbert", 412, "Not Read") 
displayBooks();