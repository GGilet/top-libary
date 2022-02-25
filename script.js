let userLibrary = JSON.parse(localStorage.getItem('Book') || '[]');

const button = document.getElementById('button');
const addBookButton = document.getElementById('addButton');
const form = document.getElementById('bookFormInputs');
const formContainer = document.getElementsByClassName('.form-container');
const cardContainer = document.getElementById('cardContainer');

let bookTitle = '';
let bookAuthor = 'test';
let bookReleaseYear = '';
let bookPages = '';
let isRead = false;
let userBook;

displayCards();

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
	localStorage.setItem('Book', JSON.stringify(userLibrary));
}

button.addEventListener('click', () => {
	addBookToLibrary();
	displayCards();
});

addBookButton.addEventListener('click', () => {
	document.getElementById('formContainerID').style.display = 'block';
});

window.onclick = function (event) {
	if (event.target.className === 'formContainer') {
		event.target.style.display = 'none';
	}
};

function displayCards() {
	cardContainer.replaceChildren();
	for (let i = 0; i < userLibrary.length; i++) {
		bookAuthor = userLibrary[i].author;
		bookTitle = userLibrary[i].title;
		bookReleaseYear = userLibrary[i].releaseYear;
		bookPages = userLibrary[i].pages;
		const cardTemplate = `<div class="library-card">
									<div class="book-title">
										<button id="readButton">
											<span class="material-icons" > done_all </span>
										</button>
										<h4 title="${bookTitle}">${bookTitle}</h4>
										<button id="deleteButton">
											<span class="material-icons"> highlight_off </span>
										</button>
									</div>
									<div class="library-card-content">
										<div class="book-author">
											<h3>Author</h3>
											<span id="author">${bookAuthor}</span>
										</div>
										<div class="book-release-date">
											<h3>Release Date</h3>
											<span id="releaseDate">${bookReleaseYear}</span>
										</div>
										<div class="book-pages">
											<h3>Pages</h3>
											<span id="releaseDate">${bookPages}</span>
										</div>
									</div>
									</div>`;

		const libraryDiv = document.createElement('div');
		libraryDiv.innerHTML = cardTemplate;
		cardContainer.appendChild(libraryDiv);
	}
}
