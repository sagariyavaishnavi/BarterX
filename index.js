import http from "http";
import fs from "fs";

// Log function to track requests
const logRequest = (url) => {
  const logMessage = `${new Date().toISOString()} - Request URL: ${url}\n`;
  fs.appendFile("log.txt", logMessage, (err) => {
    if (err) console.error("Error writing to log file:", err);
  });
};

// Creating the server
const server = http.createServer((req, res) => {
  const { url } = req;

  // Log the request
  logRequest(url);

  // Handle routes
  switch (url) {
    case "/":
      res.write("Welcome to the BarterX");
      break;
    case "/products":
      res.write("Here are the products up for Sale in BarterX");
      break;
    case "/login":
      res.write("Login to the BarterX");
      break;
    case "/signup":
      res.write("Sign up to the BarterX");
      break;
    case "/profile":
      res.write("Trader Profile");
      break;
    case "/cart":
      res.write("Your Shopping Cart is here");
      break;
    case "/checkout":
      res.write("Let's start shipping");
      break;
    case "/orders":
      res.write("Your Orders are here");
      break;
    case "/categories":
      res.write("Browse Categories");
      break;
    case "/chat":
      res.write("Your Chat with fellow Traders");
      break;
    case "/contact":
      res.write("Contact Us at");
      break;
    case "/about":
      res.write("The modern approach to trading our commodities");
      break;
    default:
      res.write("Page not found");
      break;
  }

  res.end();
});

// Start the server
const PORT = 8050;
server.listen(PORT, () => {
    console.log(`Server is runnning on http://localhost:${PORT}`);
 });
