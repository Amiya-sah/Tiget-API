const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const expressValidator = require('express-validator'); 
const dotenv = require('dotenv');
dotenv.config();

const app = express();

mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
  )
  .then(() => console.log('DB Connected'))
  mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  });


const postRoutes = require('./routes/route')


//add middlewares routes etc.
//app.use(express.json());
app.use(morgan("start"))
app.use(bodyParser.json());
app.use (expressValidator());

//const routerReview = require('./controllers/controller');
//const validator = require('./helpers/helper')
app.use('/reviews', postRoutes)
//app.use('/reviews', routerReview);


app.get('/', (req, res) => res.send("Created an app Tiger-Direct"));
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening from port ${port}`);
})
