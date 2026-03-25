import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPatients } from "../repository/patientRepository";

export default function PatientList() {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  // 🔹 Fetch from API
  const fetchPatients = async () => {
    try {
      console.log("📡 Fetching patients...");
      const data = await getPatients();
      console.log("✅ API Data:", data);
      setPatients(data);
    } catch (err) {
      console.error("❌ Error fetching:", err);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  // 🔹 Delete (local only for now)
  const deletePatient = (id) => {
    const updated = patients.filter((p) => p._id !== id);
    setPatients(updated);
  };

  return (
    <div style={container}>
      
      {/* 🔙 BACK BUTTON */}
      <button style={backBtn} onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <h1 style={title}>👥 Total Patients</h1>

      <div style={list}>
        {patients.map((p) => (
          <div key={p._id} style={card}>
            <div>
              <h3>{p.name || "-"}</h3>
              <p>Age: {p.age || "-"}</p>
              <p>📞 {p.phone || "-"}</p>
              <p>📍 {p.address || "-"}</p>
            </div>

            <button style={deleteBtn} onClick={() => deletePatient(p._id)}>
              ❌ Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}