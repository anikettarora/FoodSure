const express = require('express')
const app = express()
const port = 5500
const mongoDB = require("./db");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})


mongoDB();
app.get('/', (req, res) =>  {
  res.send('Welcome');
})
app.use(express.json());
app.use('/api', require("./Routes/CreatUser"));
app.use('/api', require("./Routes/DisplayData"));

app.listen(port, () => {
  console.log('listening on port');
})