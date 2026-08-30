document.addEventListener('DOMContentLoaded', () => {
    fetch('/frost/data/pages.json') // Use relative path or '/frost/data/pages.json' depending on your project root
        .then(response => response.json())
        .then(data => {
            const navGrid = document.getElementById('nav-grid');
            if (!navGrid) return;
            navGrid.innerHTML = ''; 

            for (const [name, details] of Object.entries(data)) {
                const a = document.createElement('a');
                a.className = 'nav-button';
                a.href = details.location;

                const iconSpan = document.createElement('span');
                iconSpan.className = 'material-symbols-rounded';
                iconSpan.textContent = details.symbol;

                const textSpan = document.createElement('span');
                textSpan.textContent = name.charAt(0).toUpperCase() + name.slice(1);

                a.appendChild(iconSpan);
                a.appendChild(textSpan);
                navGrid.appendChild(a);
            }
        })
        .catch(error => console.error('Failed to load navigation data:', error));
});