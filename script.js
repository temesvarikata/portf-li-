// API meghívása egy véletlenszerű idézetért
function fetchQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').textContent = `"${data.content}" - ${data.author}`;
        })
        .catch(error => console.error('Error fetching quote:', error));
}

// Új idézet kérése a gomb megnyomásakor
document.getElementById('new-quote').addEventListener('click', fetchQuote);

// Betöltéskor egy idézetet kér
window.onload = function() {
    fetchQuote();
};

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const fetchQuoteButton = document.getElementById('fetch-quote');

    const fetchQuote = () => {
        // A jsonplaceholder API nem szolgáltat idézeteket, de véletlenszerű adatokat generálhatunk
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.length);
                const quote = data[randomIndex].body; // Idézet (törzsszöveg)
                const author = `Szerző: ${data[randomIndex].title}`; // Szerző (cím)
                
                quoteElement.textContent = `"${quote}"`;
                authorElement.textContent = author;
            })
            .catch(error => {
                console.error('Hiba történt:', error);
            });
    };

    // Idézet betöltése az oldal betöltésekor
    fetchQuote();

    // Új idézet betöltése gombnyomásra
    fetchQuoteButton.addEventListener('click', fetchQuote);
});


