const fs = require("fs");

const appRoutes = (req, res) => {
  const url = req.url;
  console.log(`Server running... on: ${req.method} ${url}`);
  if (url === "/hi") {
    res.write("<p>Something page</p>");
    return res.end();
  }

  if (url === "/data" && req.method === "POST") {
    var body = "";
    req.on("data", function (chunk) {
      body += chunk;
    });
    req.on("end", function () {
      const message = body.split("=")[1];
      fs.writeFile("./message.txt", message, (err) => {
        res.writeHead(302, { location: "/data" });
        return res.end();
      });
    });
  }

  if (url === "/form") {
    const postHtml =
      "<html><head><title>Post Example</title></head>" +
      "<body>" +
      '<form method="post" action="/data">' +
      'Input 1: <input name="message"><br>' +
      '<input type="submit">' +
      "</form>" +
      "</body></html>";
    res.write(postHtml);
    return res.end();
  }

  if (url === "/data") {
    res.write("<p>Success!, file saved</p>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<p>Hello World</p>");
  res.end();
};

module.exports = appRoutes;
