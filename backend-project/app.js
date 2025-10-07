
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors'); 


const app = express();


app.use(cors());

app.use(express.json());


const PORT = process.env.PORT || 3001;


const dbPool = mysql.createPool({
    host: 'localhost',      
    user: 'root',         
    password: '', 
    database: 'fogado', 
    port: 3307,            
});


app.get("/agyak", (req,res) =>
    {
        const sql = "select sznev, agy from `szobak`    ";
        db.query(sql, (err, result) =>{
            if(err) return res.json(err);
            return res.json(result)
   
        })
  })

  app.get("/kihasznaltsag", (req,res)=>{
    const sql = "SELECT COUNT(foglalasok.vendeg) AS vendégek, SUM(DATEDIFF(foglalasok.tav, foglalasok.erk)) AS vendégéjszakák FROM foglalasok INNER JOIN szobak ON foglalasok.szoba = szobak.szazon GROUP BY szobak.sznev";
    db.query(sql, (err, result) =>{
        if(err) return res.json(err);
        return res.json(result)
   
    })
  })

  aapp.get("/foglalasok", (req,res)=>{
    const sql = "SELECT vendegek.vnev AS nev, DATE_FORMAT(foglalasok.erk, '%Y-%m-%d') AS erkezes, DATE_FORMAT(foglalasok.tav, '%Y-%m-%d') AS tavozas FROM foglalasok INNER JOIN vendegek ON foglalasok.vendeg = vendegek.vsorsz ORDER BY vendegek.vnev ASC" ;
    db.query(sql, (err, result) =>{
        if(err) return res.json(err);
        return res.json(result)
    })
  })

app.get('/ping', async (req, res) => {
  try {
    const [rows] = await dbPool.query('SELECT 1 + 1 AS solution');
    res.json({ message: 'Sikeres adatbázis kapcsolat!', result: rows[0].solution });
  } catch (error) {
    console.error('Hiba az adatbázis-kapcsolat során:', error);
    res.status(500).json({ message: 'Hiba az adatbázis-kapcsolat során.' });
  }
});

app.listen(PORT, () => {
    console.log(`A szerver fut a http://localhost:${PORT} címen`);
});
