import { useState } from "react";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const addAppointment = (e) => {
    e.preventDefault();

    const newAppointment = {
      id: Date.now(),
      name,
      date,
    };

    setAppointments([...appointments, newAppointment]);
    setName("");
    setDate("");
  };

  return (
    <div style={container}>
      <h1 style={title}>🩺 Appointments</h1>

      <form onSubmit={addAppointment} style={form}>
        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={input}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={input}
          required
        />

        <button type="submit" style={button}>
          ➕ Add Appointment
        </button>
      </form>

      <h3 style={subTitle}>📋 Appointment List</h3>

      <ul style={list}>
        {appointments.map((app) => (
          <li key={app.id} style={card}>
            <span style={{ fontWeight: "bold" }}>{app.name}</span>
            <span>{app.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* 🎨 Styles */

const container = {
  padding: "30px",
  background: "linear-gradient(to right, #74ebd5, #9face6)",
  minHeight: "100vh",
};

const title = {
  color: "#fff",
  textAlign: "center",
};

const subTitle = {
  marginTop: "30px",
  color: "#333",
};

const form = {
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  marginTop: "20px",
  flexWrap: "wrap",
};

const input = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
};

const button = {
  backgroundColor: "#ff7a18",
  color: "#fff",
  border: "none",
  padding: "10px 15px",
  borderRadius: "8px",
  cursor: "pointer",
};

const list = {
  listStyle: "none",
  padding: 0,
};

const card = {
  background: "#fff",
  padding: "15px",
  marginTop: "10px",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};