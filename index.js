const express = require("express");
const route = require("./routes/client/index-routes");
const app = express();
const port = 3001;

app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "pug   ");
route(app);
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
