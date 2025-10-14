import React, { useEffect, useState } from "react";
import axios from "axios";

function Kihasznaltsag() {
  const [utilizationData, setUtilizationData] = useState([]);

  useEffect(() => {
    // Fetch room utilization data
    axios.get("http://localhost:3000/room-utilization")
      .then((response) => {
        setUtilizationData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching room utilization data:", error);
      });
  }, []);

  return (
    <div style={{ marginTop: "20px", width: "50%" }}>
      <h3>A szobák kihasználtsága</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Szoba neve</th>
            <th>Vendégek száma</th>
            <th>Vendégéjszakák száma</th>
          </tr>
        </thead>
        <tbody>
          {utilizationData.map((room, index) => (
            <tr key={index}>
              <td>{room.room_name}</td>
              <td>{room.guest_count || 0} fő</td>
              <td>{room.nights_count || 0} éjszaka</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Kihasznaltsag;