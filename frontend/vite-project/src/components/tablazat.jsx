import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/fogado.css";

function Tablazat() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/rooms")
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching room data:", error);
      });
  }, []);

  return (
    <div>
      <h3>A hét törpe fogadó</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Szoba neve</th>
            <th>Ágyak száma</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index}>
              <td>{room.room_name}</td>
              <td>{room.bed_count}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ textAlign: "left" }}><b>A házban összesen 21 fő fér el.</b></p>
      <p style={{ textAlign: "left" }}><b>Felszereltségük:</b></p>
      
      <ul style={{ textAlign: "left" }}>
        <li>Ruhásszekrény</li>
        <li>Saját fürdőszoba zuhanytálca</li>
        <li>WC (fürdőszobával egyben)</li>
      </ul>
    </div>
  );
}

export default Tablazat;