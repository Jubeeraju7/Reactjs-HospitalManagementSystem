import { useState, useEffect } from "react";
import { getPatients, addPatient } from "../repository/patientRepository";

export default function Patients() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
  });

  const [patients, setPatients] = useState([]);

  // 🔹 Handle input change
  const handleChange = (e) => {
    console.log("Typing:", e.target.name, e.target.value);
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  // 🔹 Fetch patients
  const fetchPatients = async () => {
    try {
      console.log("📡 Fetching patients...");
      const data = await getPatients();
      console.log("✅ Patients fetched:", data);

      setPatients(data);
    } catch (err) {
      console.error("❌ Fetch error:", err);
    }
  };

  useEffect(() => {
    console.log("🚀 Patients page loaded");
    fetchPatients();
  }, []);

 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("📤 STEP 1: Sending data to backend →", patient);
  try {
    const res = await addPatient(patient);
    console.log("📥 STEP 2: Response from backend →", res);
    // 🔥 Instant UI update
    setPatients((prev) => [...prev, res]);
    setPatient({
      name: "",
      age: "",
      address: "",
      phone: "",
    });
    console.log("✅ STEP 3: UI updated with new patient");
  } catch (err) {
    console.error("❌ ERROR:", err);
  }
};

  return (
    <div style={container}>
      <h2 style={title}> Add Patient</h2>

      {/* FORM */}
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

      {/* LIST */}
      <h2 style={{ marginTop: "30px" }}>📋 Patient List</h2>

      {patients.length === 0 ? (
        <p>No patients found</p>
      ) : (
        <table style={table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((p) => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>{p.address}</td>
                <td>{p.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const container = {
  padding: "30px",
  background: "#f4f6f8",
  minHeight: "100vh",
  textAlign: "center",
};

const title = {
  marginBottom: "20px",
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  maxWidth: "400px",
  margin: "auto",
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
  background: "#007bff",
  color: "#fff",
  cursor: "pointer",
};

const table = {
  marginTop: "20px",
  width: "100%",
  borderCollapse: "collapse",
};