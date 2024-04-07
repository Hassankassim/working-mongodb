const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User= require('./models/dataSchema')



app.use(express.json());
app.use(cors());




app.post('/', async(req, res) => {
    const {firstname,email,phonenumber,password} = req.body
    
    
 


    const formData = new User({
        firstname: firstname,
        email: email,
        phonenumber:phonenumber,
        password:password,
    

    })

    try {
        await formData.save();
        res.send("inserted data.." )
    } catch(err) {
        console.error('There was a problem with the request:');
       
    }
});

const port = process.env.PORT || https://loginmongo.netlify.app/;


async function connectDB(uri){
    mongoose.connect(uri, { useNewUrlParser: true})
}

const start = async ()=>{
    await connectDB("mongodb+srv://hassankassim553:hassankassim553@cluster0.jerutzb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("connected to the database");
    app.listen(port ,()=>console.log(`listening on ${port}`))
}

start()

