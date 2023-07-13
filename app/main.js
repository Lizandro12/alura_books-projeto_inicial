let booksList = [];

const dataAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

const elementForBooks = document.getElementById("livros");


async function getAPIBooks(){
    const res = await fetch(dataAPI);
    booksList = await res.json();

    console.table(booksList)

    showBooks(booksList);
}

function showBooks(booksList){
    booksList.forEach(book => {
        elementForBooks.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${book.imagem}" alt="${book.alt}" />
        <h2 class="livro__titulo">
          ${book.titulo}
        </h2>
        <p class="livro__descricao">${book.autor}</p>
        <p class="livro__preco" id="preco">${book.preco}</p>
        <div class="tags">
          <span class="tag">${book.categoria}</span>
        </div>
      </div>
        ` 
    });
}

getAPIBooks();
