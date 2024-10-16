const express = require("express");

const route = require("./routes/client/index.route.js")

const app = express();
const port = 3000;

app.set("views", ("./views"));
app.set("view engine", "pug");


route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});