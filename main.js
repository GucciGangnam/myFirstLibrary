// click on add new book will open pop up
let addBookBtn = document.getElementById("add-new-book-btn");
addBookBtn.addEventListener("click", function () {
    let popup = document.getElementById("overlayScreen");
    popup.style.display = "";
}
);

// click on cancel button will close pop up
let closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", function () {
    let popup = document.getElementById("overlayScreen");
    popup.style.display = "none";
}
);

// Library 
let myLibrary = [];
// Book constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

// add book to library
function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

// sumbit form will add that book to th library
let submitBtn = document.getElementById("sumbit-book-btn");
submitBtn.addEventListener("click", function () {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    addBookToLibrary(title, author, pages, read);
    let popup = document.getElementById("overlayScreen");
    popup.style.display = "none";
    console.log("book submitted");
    console.log(myLibrary);
    displayBooks();
    title = document.getElementById("title").value = "";
    author = document.getElementById("author").value = "";
    pages = document.getElementById("pages").value = "";

}
);



//stop form from submitting
let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
}
);



function displayBooks() {
    let library = document.getElementById("library");
    library.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement("div");
        book.classList.add("book");
        book.innerHTML = `
        <h3>${myLibrary[i].title}</h3>
        <p>Author: ${myLibrary[i].author}</p>
        <p>Pages: ${myLibrary[i].pages}</p>
        <p class="read-recipt">Read: ${myLibrary[i].read}</p>
        <button class="read-btn">Read</button>
        <button class="delete-btn">Delete</button>
        
        `;
        library.appendChild(book);
    }
}

// delete book
let library = document.getElementById("library");
library.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        let book = e.target.parentElement;
        book.remove();
        myLibrary.splice(book, 1);
    }
}
);

// read book
library.addEventListener("click", function (e) {
    if (e.target.classList.contains("read-btn")) {
        let book = e.target.parentElement;
        let read = book.querySelector(".read-recipt");
        if (read.textContent.includes("Read: Yes")) {
            read.textContent = "Read: No";
        } else {
            read.textContent = "Read: Yes";
        }
    }
}
);

// this is a test 