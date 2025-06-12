/* Usando la l'API https://boolean-spec-frontend.vercel.app/freetestapi/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
Testala con l’array [2, 13, 7, 21, 19] . */

function getBooks(ids) {
    const url = "http://localhost:3333/books/";
    const promises = ids.map(id =>
        fetch(url + id)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Errore per ID ${id}: ${res.status}`);
                }
                return res.json();
            })
    );
    return Promise.all(promises);
}

getBooks([2, 13, 7, 21, 19])
    .then(books => {
        console.log(books);
    })
    .catch(error => {
        console.error('Errore nel recupero dei libri:', error);
    });