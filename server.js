const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: ""
}

app.use(cors(corsOptions));

app.use(express.json);

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.json({message: 'Corriendome'});
});

require("./app")

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})