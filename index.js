function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  main.innerHTML = '';

  books.forEach(book => {
    const bookTitle = document.createElement('h2');
    bookTitle.textContent = book.name;
    main.appendChild(bookTitle);
  });
}
