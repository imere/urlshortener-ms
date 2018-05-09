const express = require("express");
const PORT = Number(process.argv[2]) || process.env.PORT;
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "static")));

//app.use(bodyParser.urlencoded({"extended": false}));

app.set("views", path.join(__dirname, "pages"));

app.set("view engine", "ejs");

const homeRouter = require("./home");
app.use("/", homeRouter);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
