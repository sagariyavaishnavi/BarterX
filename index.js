import http from "http";
import fs from "fs";

// Log function to track requests
const logRequest = (method, url) => {
  const logMessage = `${new Date().toISOString()} - Method: ${method}, URL: ${url}\n`;
  fs.appendFile("log.txt", logMessage, (err) => {
    if (err) console.error("Error writing to log file:", err);
  });
};

// Creating the server
const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Log the request
  logRequest(method, url);

  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to the BarterX");
      break;
    case "/api/products":
      res.writeHead(200, { "Content-Type": "application/json" });
      const products = [
        { "id": 1, "name": "Used Laptop", "price": 300 },
        { "id": 2, "name": "Second-hand Bicycle", "price": 50 }
    ];
        res.end(JSON.stringify(products));
        break;
    case "/login":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Login to the BarterX");
      break;
    case "/signup":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Sign up to the BarterX");
      break;
    case "/profile":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Trader Profile");
      break;
    case "/cart":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Your Shopping Cart is here");
      break;
    case "/checkout":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Let's start shipping");
      break;
    case "/orders":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Your Orders are here");
      break;
    case "/categories":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Browse Categories");
      break;
    case "/chat":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Your Chat with fellow Traders");
      break;
    case "/contact":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Contact Us at");
      break;
    default:
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Page not found", statusCode: 404 }));
      break;
  }
});

// Start the server
const PORT = 8050;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});