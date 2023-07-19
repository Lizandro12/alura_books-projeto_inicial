
const elementForBooks = document.getElementById("livros")

const elementWithTotalPriceValue = document.getElementById("valor_total_livros_disponiveis")

function showBooks(booksList){
  elementWithTotalPriceValue.innerHTML = ""
  elementForBooks.innerHTML = ""
    booksList.forEach(book => {
    let availabilityOfBook = book.quantidade > 0 ? 'livro__imagens' : 'indisponivel'
        elementForBooks.innerHTML += `
        <div class="livro">
        <img class="${availabilityOfBook}" src="${book.imagem}" alt="${book.alt}" />
        <h2 class="livro__titulo">
          ${book.titulo}
        </h2>
        <p class="livro__descricao">${book.autor}</p>
        <p class="livro__preco" id="preco">R$ ${book.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${book.categoria}</span>
        </div>
      </div>
        ` 
    });
}