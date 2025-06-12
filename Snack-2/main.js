/* 
Creare un array (availableBooks) che contiene tutti i libri disponibili.
Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi). */

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

// 1. Array con tutti i libri disponibili
const availableBooks = books.filter(book => book.available);

// 2. Array con prezzo scontato del 20%, formato e arrotondato al centesimo
const discountedBooks = availableBooks.map(book => {
    // Estrai il prezzo numerico
    const priceNumber = parseFloat(book.price.replace('€', ''));
    // Calcola il prezzo scontato e arrotonda a 2 decimali
    const discountedPrice = (priceNumber * 0.8).toFixed(2);
    // Ricostruisci il formato stringa con '€'
    return {
        ...book,
        price: `${discountedPrice}€`
    };
});

// 3. Primo libro scontato con prezzo intero (senza centesimi)
const fullPricedBook = discountedBooks.find(book => {
    const priceNumber = parseFloat(book.price.replace('€', ''));
    return priceNumber % 1 === 0;
});

console.log(availableBooks);
console.log(discountedBooks);
console.log(fullPricedBook);