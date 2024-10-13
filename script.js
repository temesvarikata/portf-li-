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




