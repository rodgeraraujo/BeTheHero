const express = require("express");
const cors = require("cors");

// routes
const api = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(api);

app.listen(3333);
