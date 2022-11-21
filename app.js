const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log("Server running... on:", url);
  //   console.log(req.url, req.method, req.headers);
  if (url === "/something") {
    console.log("Link reached");
    res.write("<p>Something page</p>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<p>Hello World</p>");
  res.end();
});

server.listen(3000);
