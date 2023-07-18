let btnOrderBy = document.getElementById("btnOrdenarPorPreco")

btnOrderBy.addEventListener("click", orderBooksByPrice)

function orderBooksByPrice(){
    let orderedBooks = booksList.sort((a, b) => {return a.preco - b.preco})

    showBooks(orderedBooks)
}