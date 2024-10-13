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

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const user = data.results[0];
            const userInfo = `
                <p>Név: ${user.name.first} ${user.name.last}</p>
                <p>Email: ${user.email}</p>
                <img src="${user.picture.medium}" alt="User Picture">
            `;
            document.getElementById('user-info').innerHTML = userInfo;
        })
        .catch(error => {
            console.error('Hiba történt:', error);
        });
});



