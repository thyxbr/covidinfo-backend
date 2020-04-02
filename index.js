const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// load .env
require('dotenv-safe').config();

const app = express();

const port = process.env.PORT;

app.use(cors({ origin: '*'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes")(app);

app.listen(port);