import { useState } from "react";
import Layout from "./Layout";

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
    <Layout>
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

    </Layout>

  );
}

/* 🎨 Styles */

const container = {
  background:  "#fff",
  padding: "40px",
  height: "100vh",
  // background: "linear-gradient(to right, #74ebd5, #9face6)",
  minHeight: "100vh",
};

const title = {
  color: "#1e293b",
  textAlign: "center",
  margin: 0,        // ✅ remove default margin
  paddingTop: "20px" // ✅ optional spacing inside
};

const subTitle = {
  marginTop: "30px",
color:  "#1e293b",
};

const form = {
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  marginTop: "0px",
  flexWrap: "wrap",
   paddingTop: "60px"
};

const input = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
};

const button = {
  backgroundColor: "#0dfc0d",
  color:  "#1e293b",
  border: "none",
  padding: "10px 15px",
  borderRadius: "8px",
  cursor: "pointer",
};

const list = {
  listStyle: "none",
  margin: 0,     // ✅ remove top space
  padding: 0,    // ✅ remove left space
};

const card = {
  background: "#1e293b",
  padding: "0px",
  marginTop: "10px",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};