/* Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).
Ordina l’array booksByPricein base alla disponibilità (prima quelli disponibili), senza creare un nuovo array. */

const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

// 1. Verifica se c'è almeno un libro disponibile
const areThereAvailableBooks = books.some(book => book.available);

// 2. Crea una copia ordinata per prezzo crescente
const booksByPrice = [...books].sort((a, b) => {
    const priceA = +a.price.replace('€', '');
    const priceB = +b.price.replace('€', '');
    return priceA - priceB;
});

// 3. Ordina booksByPrice per disponibilità (prima disponibili), SENZA creare un nuovo array
booksByPrice.sort((a, b) => {
    // disponibili prima (true = 1, false = 0)
    return (b.available ? 1 : 0) - (a.available ? 1 : 0);
});

console.log('Almeno un libro disponibile?', areThereAvailableBooks);
console.log('Libri ordinati per prezzo e disponibilità:', booksByPrice);