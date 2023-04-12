const stocks = ["AAPL", "GOOGL", "MSFT", "AMZN", "FB", "TSLA", "NVDA", "NFLX", "PYPL", "ADBE"];

const stockDisplay = document.getElementById("stock-name");
const generateBtn = document.getElementById("generate-btn");

function generateStock() {
  const randomIndex = Math.floor(Math.random() * stocks.length);
  const randomStock = stocks[randomIndex];
  stockDisplay.textContent = randomStock;
}

generateBtn.addEventListener("click", generateStock);
