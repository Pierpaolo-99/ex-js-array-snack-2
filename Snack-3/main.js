/* Creare un array (authors) che contiene gli autori dei libri.
Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
Ordina l’array authors in base all’età, senza creare un nuovo array.
(se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente) */

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

// 1. Array che contiene gli autori dei libri
const authors = books.map(book => book.author);

// 2. Verifica se tutti gli autori sono maggiorenni (>= 18 anni)
const areAuthorsAdults = authors.every(author => author.age >= 18);

// 3. Ordina l’array authors in base all’età (modifica l’array originale)
if (areAuthorsAdults) {
    authors.sort((a, b) => a.age - b.age); // crescente
} else {
    authors.sort((a, b) => b.age - a.age); // decrescente
}

console.log(authors);
console.log('Tutti maggiorenni?', areAuthorsAdults);

// Array che contiene le età degli autori dei libri
const ages = authors.map(author => author.age);

// Somma delle età
const agesSum = ages.reduce((sum, age) => sum + age, 0);

// Età media
const averageAge = agesSum / ages.length;

console.log('Età degli autori:', ages);
console.log('Età media:', averageAge);