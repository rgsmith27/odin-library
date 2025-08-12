let myLibrary = [];

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const readStatus = document.querySelector("#read-status");

const bookInput = document.querySelector("form");
bookInput.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, readStatus.value);
    displayBooks();
});

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();

    this.info = function (){
        return(`${title}, ${author}, ${pages}, ${read}`);
    }
}

function addBookToLibrary(title, author, pages, read){
    book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function removeBook(bookID){
    myLibrary = myLibrary.filter((book) => {
        book.id !== bookID;
    });
}

function displayBooks(){

    library = document.querySelector(".library");

    library.replaceChildren();

    myLibrary.forEach((book) => {     
        newCard = createBookCard(book);
        newCard.classList.add("book-card");
        library.appendChild(newCard);
    });
}

function createBookCard(book){
    let newCard = document.createElement("div");
    newCard.setAttribute("data-book-id", book.id);
    
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

    let removeButton = document.createElement("button");
    removeButton.textContent = "remove book";
    removeButton.addEventListener("click", (e) => {
        let toBeDeleted = e.target.parentNode.dataset.bookID;
        console.log(toBeDeleted);
        removeBook(toBeDeleted);
        displayBooks();
    });

    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(readStatus);
    newCard.appendChild(removeButton);

    return newCard;
}

addBookToLibrary("Dune", "Frank Herbert", 412, "Not Read") 
displayBooks();