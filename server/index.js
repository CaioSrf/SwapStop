const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "bd",


})

app.get("/", (req, res) =>{

    let SQL = "INSERT INTO listaitens ( itens ) VALUES ('')";

    db.query(SQL, (err, result) => {
        console.log(err);
    })
})



app.listen(3006, () => {
    console.log("rodando servidor");
})
