const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
const {db, syncAndSeed, User } = require('./database/db');

app.get('/',(req,res,next) => res.sendFile(path.join(__dirname,'../public/index.html')))
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/assets',express.static(path.join(__dirname,'../src/assets')));

const init = async() => {
  try{
    await db.authenticate();
    await syncAndSeed();
  }catch(ex){
    console.log(ex)
  }
  const port = process.env.PORT || 3080;
  app.listen(port,()=>console.log(`listening on port: ${port}`))
}
init();