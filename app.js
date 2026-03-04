// Import the 'http' module
const http = require('http');
const os  = require('os');
const nets = os.networkInterfaces();

// Define the port the server will listen on
const port = 3000;

// Create a server instance
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body
  res.end('Hello from DevOps pipeline!\n');
});

// Find the first non-internal IPv4 address
const localIp = Object.values(nets)
  .flat()
  .find(net => !net.internal && net.family === 'IPv4' || net.family === 4)?.address;

// Start the server and listen for incoming requests
server.listen(port, () => {
  console.log(`Server running at http://${localIp}:${port}/`);
});
