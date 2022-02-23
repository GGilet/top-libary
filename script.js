let userLibrary = [];
const button = document.getElementById('button');
const form = document.getElementById('bookFormInputs');
const formContainer = document.getElementsByClassName('.form-container');

let bookTitle = '';
let bookAuthor = '';
let bookReleaseYear = '';
let bookPages = '';
let isRead = false;
let userBook;

function Book(title, author, releaseYear, pages, isRead) {
	this.title = title;
	this.author = author;
	this.releaseYear = releaseYear;
	this.pages = pages;
	this.isRead = isRead;
}

function addBookToLibrary() {
	bookTitle = form.bookTitle.value;
	bookAuthor = form.bookAuthor.value;
	bookReleaseYear = form.bookReleaseYear.value;
	bookPages = form.bookPages.value;
	isRead = form.isRead.checked;

	userBook = new Book(
		bookTitle,
		bookAuthor,
		bookReleaseYear,
		bookPages,
		isRead
	);

	userLibrary.push(userBook);
}

button.addEventListener('click', () => {
	addBookToLibrary();
	formContainer.style.display = 'none';
	console.log(userLibrary);
});
