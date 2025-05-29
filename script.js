const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

async function fetchQuote() {
  try {
    const res = await fetch('https://type.fit/api/quotes');
    const quotes = await res.json();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteText.textContent = \`"\${quote.text}"\`;
    authorText.textContent = quote.author ? \`– \${quote.author}\` : "– Unknown";
  } catch (error) {
    quoteText.textContent = "Oops! Failed to load quote.";
    authorText.textContent = "";
    console.error("Error fetching quote:", error);
  }
}

newQuoteBtn.addEventListener('click', fetchQuote);
window.addEventListener('load', fetchQuote);
