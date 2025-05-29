const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

async function fetchQuote() {
  try {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    quoteText.textContent = `"${data.content}"`;
    authorText.textContent = `– ${data.author}`;
  } catch (error) {
    quoteText.textContent = "Oops! Failed to load quote.";
    authorText.textContent = "";
    console.error("Error fetching quote:", error);
  }
}

newQuoteBtn.addEventListener('click', fetchQuote);
window.addEventListener('load', fetchQuote);
