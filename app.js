const http = require("http");
const appRoutes = require("./route");

const server = http.createServer(appRoutes);

server.listen(3000);
