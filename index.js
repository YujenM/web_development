const express = require('express');

const app = express();
const port=2000;
app.get ("/",(req,resp)=>{
    // resp.send("hello world");
    const mydetails={
        'name': 'yujen',
        'college' : 'iims'
    }
    resp.json(mydetails)
})
app.listen(port,() =>{
    console.log('application is running on port : ',port);
})