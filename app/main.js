let booksList = [];

const dataAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';


async function getAPIBooks(){
    const res = await fetch(dataAPI);
    booksList = await res.json();

    let booksWithDiscount = applyDiscount(booksList)

    showBooks(booksWithDiscount);
}


getAPIBooks();
