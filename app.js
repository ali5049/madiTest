const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
// Init middleware
app.use(express.json({ extended: false }));
app.use(express.static('public'));

const calculatorRoutes = require('./routers/calculator');

app.get("/", function (req, res) {
  res.send("Server is running");
});

app.use('/api/calculator',calculatorRoutes );

app.listen(3001, function () {
  console.log("Example app listening on port 3000!");
});
