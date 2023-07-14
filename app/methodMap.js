function applyDiscount(booksList){
    const discount = 0.3

    return booksList.map( book => {
        return {...book, preco: book.preco - (book.preco * discount)}
    });

   
}