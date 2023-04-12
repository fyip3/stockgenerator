const stocks = [
  "AAPL", "GOOGL", "MSFT", "AMZN", "FB", "TSLA", "NVDA", "NFLX", "PYPL", "ADBE",
  "BABA", "BAC", "BA", "C", "CAT", "CRM", "CSCO", "CVX", "DIS", "F",
  "GE", "GILD", "GS", "HD", "IBM", "INTC", "JNJ", "JPM", "KO", "LMT",
  "MCD", "MMM", "MRK", "NKE", "ORCL", "PEP", "PFE", "PG", "PM", "QCOM",
  "RTX", "SBUX", "T", "TM", "UNH", "V", "VZ", "WBA", "WFC", "WMT",
  "XOM", "AMGN", "AVGO", "BMY", "CELG", "CHTR", "COST", "CVS", "DHR", "DUK",
  "EMR", "EXC", "GD", "GM", "GSK", "HON", "HPQ", "HSBC", "ITW", "KHC",
  "LLY", "LUV", "MA", "MDT", "MMM", "MO", "MS", "NEE", "NVS", "NVZMY",
  "PBR", "PCG", "PNC", "RDS-A", "RIO", "SAP", "SLB", "SNAP", "SNE", "SPOT",
  "TSM", "TWTR", "UTX", "VOD", "WBA", "WFC", "X", "XRX", "YUM", "ZM"
];

const stockDisplay = document.getElementById("stock-name");
const generateBtn = document.getElementById("generate-btn");

function generateStock() {
  const randomIndex = Math.floor(Math.random() * stocks.length);
  const randomStock = stocks[randomIndex];
  stockDisplay.textContent = randomStock;
}

generateBtn.addEventListener("click", generateStock);
