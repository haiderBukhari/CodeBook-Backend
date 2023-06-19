import express from "express";
import jsonServer from "json-server";
import auth from "json-server-auth";
import cors from "cors";

const server = express();

server.use(cors());

const router = jsonServer.router('./data/db.json');
server.use('/api', router);
server.db = router.db

const middlewares = jsonServer.defaults()
const rules = auth.rewriter({
    products: 444,
    featured_products: 444,
    orders: 660,
    users: 600
});

server.use(rules)
server.use(auth)
server.use(middlewares)
server.use(router)

const port = process.env.PORT || 8000;
server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
