const express = require('express');
const app = express();
module.exports = app
const path = require('path');
const axios = require('axios');
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
const {db, syncAndSeed} = require('./database/index');

app.get('/',(req,res,next) => res.sendFile(path.join(__dirname,'./public/index.html')))
app.use('/dist', express.static(path.join(__dirname, './dist')));
app.use('/assets',express.static(path.join(__dirname,'./src/assets')));

// api routes
//app.use('/api/inventory', require('./api/Inventory'))


app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

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