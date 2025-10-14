import React, { useEffect, useState } from "react";
import axios from "axios";

function Parameteres() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    // Fetch all room names for the dropdown
    axios.get("http://localhost:3000/rooms")
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching room names:", error);
      });
  }, []);

  const fetchBookingData = () => {
    if (selectedRoom) {
      axios.get(`http://localhost:3000/room-bookings/${selectedRoom}`)
        .then((response) => {
          setBookingData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching booking data:", error);
        });
    }
  };

  return (
    <div style={{ marginTop: "20px", width: "50%" }}>
      <h3>A vendégszobák foglaltsága</h3>
      <div>
        <label htmlFor="room-select">Válassza ki, melyik szoba adatait szeretné látni:</label>
        <select
          id="room-select"
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
        >
          <option value="">Válasszon szobát</option>
          {rooms.map((room, index) => (
            <option key={index} value={room.room_name}>
              {room.room_name}
            </option>
          ))}
        </select>
        <button onClick={fetchBookingData} style={{ marginLeft: "10px" }}>
          Adatok
        </button>
      </div>
      {selectedRoom && (
        <div style={{ marginTop: "20px" }}>
          <h4>A választott szoba foglaltsága: {selectedRoom}</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Szoba neve</th>
                <th>Érkezés dátuma</th>
                <th>Távozás dátuma</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.guest_name}</td>
                  <td>{booking.arrival_date}</td>
                  <td>{booking.departure_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Parameteres;