const btnFilterBooks = document.querySelectorAll(".btn");

btnFilterBooks.forEach(btn => btn.addEventListener("click",filterBooks))

function filterBooks(){

    //VARIÁVEL USADA PARA OBTER O BOTÃO CLICADO
    const btnElement = document.getElementById(this.id)

    //VARIAVEL USADA PARA OBTER O VALUE DO BOTÃO
    const category = btnElement.value

    //ESTA LINHA VERIFIICA QUAL É O BOTÃO CLICADO E REALIZA O FITRO EM FUNÇÃO DA CATEGORIA DO LIVRO OU POR DISPONIBILIDADE
    let filteredBooks = category == "disponivel" ? filterForAvailability() : filterForCategory(category)
            showBooks(filteredBooks)

    if( category == "disponivel"){
        const totalValue = calculateTotalValue(filteredBooks)
        displayPriceValueOfBooks(totalValue)
    }


}

//ESTA FUNÇÃO REALIZA O FILRTO POR CATEGORIA
function filterForCategory(category) {
    return booksList.filter(book => book.categoria == category);
}

//ESTA FUNÇÃO REALIZA O FILTRO POR DISPONIBILIDADE
function filterForAvailability() {
    return booksList.filter(book => book.quantidade > 0);
}

//ESTA FUNÇÃO IMPRIME A SOMA DO PREÇO DE TODOS OS LIVROS
function displayPriceValueOfBooks(preco){
    elementWithTotalPriceValue.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${preco}</span></p>
        </div>
    `
}