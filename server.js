const js = require("json-server");
const server = js.create();
const router = js.router("./db/db.json");
const md = js.defaults();
const port = process.env.PORT || 8080;

server.use(md);
server.use(router);

server.listen(port);
