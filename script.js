let userLibrary = JSON.parse(localStorage.getItem('Book') || '[]');

const button = document.getElementById('button');
const addBookButton = document.getElementById('addButton');
const form = document.getElementById('bookFormInputs');
const formContainer = document.getElementsByClassName('.form-container');
const cardContainer = document.getElementById('cardContainer');

let bookTitle = '';
let bookAuthor = '';
let bookReleaseYear = '';
let bookPages = '';
let isRead = false;
let userBook;
let readStatus;
let buttonIndex = 0;
let index;

displayCards();

function Book(title, author, releaseYear, pages, isRead) {
	this.title = title;
	this.author = author;
	this.releaseYear = releaseYear;
	this.pages = pages;
	this.isRead = isRead;
}

function setBookToLocalStorage() {
	localStorage.setItem('Book', JSON.stringify(userLibrary));
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
	setBookToLocalStorage();
}

/* On Click Events */

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

let readButtons = document.querySelectorAll('#readButton');

// readButtons.forEach(function (e) {
// 	e = this;
// 	console.log(e.target);
// });

// let index = 0;
// for (let i = 0; i < userLibrary.length; i++) {

function changeReadStatusAndIndexButtons() {
	console.log('1');
	index = readButton.getAttribute('index');
	if (userLibrary[index].isRead == false) {
		userLibrary[index].isRead = true;
		setBookToLocalStorage();
		console.log(JSON.parse(localStorage.getItem('Book') || '[]'));
	} else {
		userLibrary[index].isRead = false;
		setBookToLocalStorage();
		console.log(JSON.parse(localStorage.getItem('Book') || '[]'));
	}
	// console.log(e.currentTarget);
	displayCards();
}

readButton.addEventListener('click', () => {
	console.log('test');
});

readButton.addEventListener('click', () => {
	changeReadStatusAndIndexButtons();
});

// }

// function toggleReadStatus(e, el) {
// 	e = e || window.event;
// 	// console.log(e.target);
// 	// console.log(this);
// 	// console.log(el);
// }
// readButtons.forEach((readButton) => {
// 	readButton.addEventListener('click', () => {
// 		console.log('I clicked');
// 	});
// });
// function displayReadStatus() {
// 	let readOrNot = document.getElementsByClassName('.readStatus');

// 	for (let i = 0; i < userLibrary.length; i++) {
// 		readOrNot[i].style.color = 'blue';
// 	}
// }

// userLibrary.forEach((readButton) => {
// 	readButtons.forEach((readButton) => {
// 		readButton.addEventListener('click', () => {
// 			console.log(userLibrary.from(readButtons).indexOf(event.target))
// 		});
// 	});
// });

function displayCards() {
	cardContainer.replaceChildren();
	userLibrary = JSON.parse(localStorage.getItem('Book') || '[]');
	for (let i = 0; i < userLibrary.length; i++) {
		bookAuthor = userLibrary[i].author;
		bookTitle = userLibrary[i].title;
		bookReleaseYear = userLibrary[i].releaseYear;
		bookPages = userLibrary[i].pages;
		isRead = userLibrary[i].isRead;

		if (isRead == true) {
			readStatus = 'bookIsRead';
		} else {
			readStatus = 'bookIsNotRead';
		}
		const cardTemplate = `<div class="library-card">
									<div class="book-title">
										<button id="readButton" index="${buttonIndex}">
											<span onclick=""class="material-icons ${readStatus}" > done_all </span>
										</button>
										<h4 title="${bookTitle}">${bookTitle}</h4>
										<button id="deleteButton">
											<span class="material-icons "> highlight_off </span>
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
		buttonIndex++;
	}
	buttonIndex = 0;
}
// getReadBookStatus();
