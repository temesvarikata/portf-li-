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


// GitHub API meghívása
function fetchGitHubProjects() {
    const githubUsername = 'github-felhasználóneved'; // Cseréld le a saját GitHub felhasználónevedre
    const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const projectGrid = document.getElementById('github-projects');
            data.forEach(repo => {
                // Minden egyes repo esetén új div-et hozunk létre
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                projectCard.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'No description available'}</p>
                    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                `;
                projectGrid.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error fetching GitHub repos:', error));
}

// Hívjuk meg a fetchGitHubProjects függvényt amikor betölt az oldal
window.onload = function() {
    fetchGitHubProjects();
}


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

// script.js
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('load-users').addEventListener('click', loadRandomUsers);

    function loadRandomUsers() {
        fetch('https://randomuser.me/api/?results=3') // 3 véletlenszerű felhasználó betöltése
            .then(response => response.json())
            .then(data => {
                const userContainer = document.getElementById('user-container');
                userContainer.innerHTML = ''; // Előző felhasználók törlése
                data.results.forEach(user => {
                    const userDiv = document.createElement('div');
                    userDiv.innerHTML = `
                        <img src="${user.picture.medium}" alt="Felhasználó képe">
                        <p><strong>Név:</strong> ${user.name.first} ${user.name.last}</p>
                        <p><strong>Ország:</strong> ${user.location.country}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                    `;
                    userContainer.appendChild(userDiv);
                });
            })
            .catch(error => console.error('Hiba történt az API hívás során:', error));
    }
});


