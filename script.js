let userLibrary = [];

function Book(title, author, pages, isRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
}

function addBookToLibrary(form) {
	let book1 = new Book('game of thrones', 'jrr tolkien', 120, true);
	let book2 = new Book('twilight', 'stephanie meyer', 120, true);

	userLibrary.push(book1);
	userLibrary.push(book2);
}

addBookToLibrary();

console.log(userLibrary);
