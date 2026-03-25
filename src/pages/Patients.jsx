import { useState, useEffect } from "react";
import Layout from "./Layout";
import { getPatients, addPatient } from "../repository/patientRepository";

export default function Patients() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
  });

  const [patients, setPatients] = useState([]);

  // Handle input
  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  // Fetch patients
  const fetchPatients = async () => {
    try {
      const data = await getPatients();
      setPatients(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addPatient(patient);
      setPatients((prev) => [...prev, res]);
      setPatient({
        name: "",
        age: "",
        address: "",
        phone: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <div style={{ padding: "20px" }}>
        <h2 style={{ margin: 0 }}>Add Patient</h2>
        <hr style={divider} />

        <form onSubmit={handleSubmit} style={form}>
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={patient.name}
            onChange={handleChange}
            style={input}
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={patient.age}
            onChange={handleChange}
            style={input}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={patient.address}
            onChange={handleChange}
            style={input}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={patient.phone}
            onChange={handleChange}
            style={input}
            required
          />

          <button type="submit" style={button}>
            ➕ Add Patient
          </button>
        </form>

        <h2 style={{ marginTop: "30px" }}>Patient List</h2>

        {patients.length === 0 ? (
          <p>No patients found</p>
        ) : (
          <table style={table}>
            <thead style={thead}>
              <tr>
                <th style={th}>Name</th>
                <th style={th}>Age</th>
                <th style={th}>Address</th>
                <th style={th}>Phone</th>
              </tr>
            </thead>

            <tbody>
              {patients.map((p) => (
                <tr key={p._id}>
                  <td style={td}>{p.name}</td>
                  <td style={td}>{p.age}</td>
                  <td style={td}>{p.address}</td>
                  <td style={td}>{p.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
}

/* 🎨 Styles */

const divider = {
  margin: "10px 0 20px",
  border: "none",
  height: "2px",
  background: "#1e293b",
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  maxWidth: "400px",
};

const input = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const button = {
  padding: "10px",
  border: "none",
  borderRadius: "6px",
  background: "#1e293b",
  color: "#fff",
  cursor: "pointer",
};

const table = {
  marginTop: "20px",
  width: "100%",
  borderCollapse: "collapse",
};

const thead = {
  background: "#1e293b",
  color: "#fff",
};

const th = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "left",
};

const td = {
  padding: "10px",
  border: "1px solid #ddd",
};