const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const path = require("path");

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

app.db = router.db;

const rules = auth.rewriter({
  users: 600,
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`JSON Server is running on port: ${port}`);
});
