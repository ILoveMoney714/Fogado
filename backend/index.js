const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");



app.use(cors())


const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    port: 3308,
    password: "",
    database: "fogado",
}); 



app.get("/", (req, res) => {
    res.send("Működik a szerver.");
})

app.get("/rooms", (req, res) => {
    const sql = "SELECT sznev AS room_name, agy AS bed_count FROM szobak ORDER BY agy DESC";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.json(results);
    });
});

app.get("/room-bookings/:name", (req, res) => {
    const roomName = decodeURIComponent(req.params.name); // Decode URL-encoded room name
    const sql = `
        SELECT vendegek.vnev AS guest_name, 
               DATE_FORMAT(foglalasok.erk, '%Y-%m-%d') AS arrival_date, 
               DATE_FORMAT(foglalasok.tav, '%Y-%m-%d') AS departure_date 
        FROM foglalasok 
        INNER JOIN szobak ON foglalasok.szoba = szobak.szazon 
        INNER JOIN vendegek ON foglalasok.vendeg = vendegek.vsorsz 
        WHERE szobak.sznev = ?
        ORDER BY foglalasok.erk ASC
    `;
    db.query(sql, [roomName], (err, results) => {
        if (err) {
            console.error("SQL Error:", err.message); // Log the error
            return res.status(500).json({ error: err.message });
        }
        return res.json(results);
    });
});

app.get("/room-utilization", (req, res) => {
    const sql = `
        SELECT sznev AS room_name, 
               SUM(foglalasok.fo) AS guest_count, 
               COUNT(foglalasok.fsorsz) AS nights_count 
        FROM szobak 
        LEFT JOIN foglalasok ON szobak.szazon = foglalasok.szoba 
        GROUP BY szobak.sznev
        ORDER BY nights_count DESC
    `;
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.json(results);
    });
});



app.listen(3000, () => {
    console.log("fut");
});