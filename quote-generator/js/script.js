const quotes = [
    {
        name: 'Stephen King',
        quote: 'Books are the perfect entertainment: no commercials, no batteries, hours of enjoyment for each dollar spent.'
    },
    {
        name: 'John Kennedy',
        quote: 'Ask not what your country can do for you, but what you can do for your country.'
    }, 
    {
        name: 'Leo Da Vinci',
        quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'
    },
    {
        name: 'Leo Tolstoy',
        quote: 'Time stays long enough for anyone who will use it.'
    },
    {
        name: 'Benjamin Franklin',
        quote: 'The noblest pleasure is the joy of understanding.'
    }
];

const quoteBtn = document.querySelector('#quoteBtn'),
    quoteAuthor = document.querySelector('#quoteAuthor'),
    quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}
