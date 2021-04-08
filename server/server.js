const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect('mongodb://localhost:27017/stringDB' , {useNewUrlParser:true , useUnifiedTopology: true , useCreateIndex: true})

const stringSchema = mongoose.Schema({
    input: String,
    output: String,
    time: String
})

const Strings  = new mongoose.model('strings' , stringSchema);


app.get('/' , (req,res) => {
    Strings.find().then((response) => res.json(response)).catch((err)=> res.json(err))
})

app.post('/' , (req,res) => {
    let newString = new Strings({
        input: req.body.input,
        output: req.body.output,
        time: req.body.time
    })

    newString.save().then((response) => res.json(response)).catch((error)=> res.json(error))
    
})



app.listen(5000 , () => {
    console.log('App listening in port 5000');
})