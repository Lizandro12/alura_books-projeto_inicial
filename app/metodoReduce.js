//ESTA FUNÇÃO EXECUTA SOMA DO PREÇO DE TODOS OS LIVROS
function calculateTotalValue(filteredBooks){
    return filteredBooks.reduce((acc, book) => acc + book.preco, 0).toFixed(2)

}