const http = require("http");

const port = 3000;
const host = "localhost";

// Static HTML Response
// const server = http.createServer((req, res) => {
//   // Set response header
//   res.setHeader("Content-Type", "text/html");

//   // Write response content
//   res.write("<html><head><title>Node JS HTTP Server</title></head><body>");
//   res.write("<h1>Hello, World!!!</h1>");
//   res.write("</body></html>");

//   // End the response
//   res.end();
// });

// JSON Response
const server = http.createServer((req, res) => {
  // Set response header
  res.setHeader("Content-Type", "application/json");

  // Write response content
  const jsonData = {
    message: "Hello, World!",
    data: new Date(),
  };
  const jsonResponse = JSON.stringify(jsonData);

  res.write(jsonResponse);

  // End the response
  res.end();
});

server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
