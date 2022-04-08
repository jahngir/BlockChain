const express = require('express')
const app = express()
const port = 1992
const pss = "asdsad"
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
   
  })


app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, '/cv.html'))

})
app.get('/skills', (req, res) => {
    res.json({
        Skill1: "Gaming",
        Skill2: "Blogging"



    })
   
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port} fsdfd ${pss}`)
})