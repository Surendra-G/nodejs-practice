
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req,res)=>{
    res.send("YETA CHAII USERS HARU AAUXAN");
});

// url params
app.get('/usersname/:id', (req,res)=>{
    const username = req.params.id;
    res.send("Welcome xa haii hamro " + username+ " lai");
});


//body params
app.post("/form",(req,res)=>{
    const body = req.body;
    res.json(body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})