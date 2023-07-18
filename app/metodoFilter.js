const btnFilterBooks = document.querySelectorAll(".btn");

btnFilterBooks.forEach(btn => btn.addEventListener("click",filterBooks))

function filterBooks(){

    const btnElement = document.getElementById(this.id)
    const category = btnElement.value

    let filteredBooks = category == "disponivel" ? booksList.filter( book => book.quantidade > 0) : booksList.filter(book => book.categoria == category)
            showBooks(filteredBooks)


}