const express = require('express');
const fs = require("fs");
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const PORT = 3001;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  let textFromFile = fs.readFileSync('memory.txt', 'utf-8') 
      res.status(200).json({
        "savedNumber": textFromFile,
        "res": 'ok'
      })
  });
  
  app.post('/', (req,res)=>{
    console.log(req.body.result);
  if(req.body.result.length === 0){
    res.status(200).json({
      "res":"no changes"
    })
  } else {
    fs.writeFileSync('memory.txt', `${req.body.result}`)
    res.status(200).json({
                  "res": 'saved'
              })
  }
    });

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });