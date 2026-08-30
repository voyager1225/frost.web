async function displayRandomQuote() {
    try {
        const response = await fetch('/frost/data/quotes.json');
        const quotes = await response.json();
        
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const selectedQuote = quotes[randomIndex];
        
        const paragraph = document.getElementById('randomquote');
        if (paragraph) {
            paragraph.textContent = typeof selectedQuote === 'string' ? selectedQuote : selectedQuote.quote;
        }
    } catch (error) {
        console.error('Failed to load quotes:', error);
    }
}

displayRandomQuote();