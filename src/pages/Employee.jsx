import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

export default function Employee() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    address: "",
    age: "",
    phone: "",
    role: "",
  });

  // 🔹 Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Add Employee (LOCAL STATE)
  const handleAdd = () => {
    if (!form.name || !form.role || !form.phone) {
      return alert("Fill required fields");
    }

    const newEmployee = {
      ...form,
      _id: Date.now(), // fake id
    };

    setEmployees((prev) => [...prev, newEmployee]);

    setForm({
      name: "",
      role: "",
      phone: "",
      age: "",
      address: "",
    });

    setShowForm(false);
  };

  // 🔹 Delete Employee
  const handleDelete = (id) => {
    const updated = employees.filter((emp) => emp._id !== id);
    setEmployees(updated);
  };

  return (
    <Layout>
      <div style={{ padding: "20px" }}>
        <h2>Employee</h2>

        <hr style={divider} />

        {/* 🔹 Top Buttons */}
        <div style={topBar}>
          <button
            style={backBtn}
            onClick={() => {
              if (window.history.length > 1) {
                navigate(-1);
              } else {
                navigate("/");
              }
            }}
          >
            ⬅ Back
          </button>

          <button style={addBtn} onClick={() => setShowForm(true)}>
            ➕ Add Employee
          </button>
        </div>

        {/* 🔹 Modal */}
        {showForm && (
          <div style={overlay}>
            <div style={modal}>
              <h3>Add Employee</h3>

              <input
                style={input}
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
              />

              <input
                style={input}
                name="age"
                placeholder="Age"
                value={form.age}
                onChange={handleChange}
              />

              <input
                style={input}
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
              />

              <input
                style={input}
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
              />

              <select
                style={input}
                name="role"
                value={form.role}
                onChange={handleChange}
              >
                <option value="">Select Role</option>
                <option>Doctor</option>
                <option>Nurse</option>
                <option>Receptionist</option>
              </select>

              <div style={{ marginTop: "10px" }}>
                <button style={saveBtn} onClick={handleAdd}>
                  ✅ Save
                </button>

                <button
                  style={cancelBtn}
                  onClick={() => setShowForm(false)}
                >
                  ❌ Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 🔹 Table */}
        {employees.length === 0 ? (
          <p>No employees found</p>
        ) : (
          <table style={table}>
            <thead style={thead}>
              <tr>
                <th style={th}>Sl.No</th>
                <th style={th}>Name</th>
                <th style={th}>Address</th>
                <th style={th}>Age</th>
                <th style={th}>Phone</th>
                <th style={th}>Role</th>
                <th style={th}>Action</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((emp, index) => (
                <tr key={emp._id}>
                  <td style={td}>{index + 1}</td>
                  <td style={td}>{emp.name}</td>
                  <td style={td}>{emp.address}</td>
                  <td style={td}>{emp.age}</td>
                  <td style={td}>{emp.phone}</td>
                  <td style={td}>{emp.role}</td>

                  <td style={td}>
                    <button
                      style={deleteBtn}
                      onClick={() => handleDelete(emp._id)}
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
}

/* 🔹 Styles */

const divider = {
  margin: "10px 0 20px",
  border: "none",
  height: "2px",
  background: "#1e293b",
};

const topBar = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
};

const backBtn = {
  padding: "8px 12px",
  background: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const addBtn = {
  padding: "10px 15px",
  background: "#1e293b",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const input = {
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  width: "100%",
};

const saveBtn = {
  padding: "10px 15px",
  background: "green",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  marginRight: "10px",
};

const cancelBtn = {
  padding: "10px",
  background: "gray",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
};

const deleteBtn = {
  background: "red",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "5px",
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal = {
  background: "#fff",
  padding: "30px",
  borderRadius: "10px",
  width: "350px",
  display: "flex",
  flexDirection: "column",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const thead = {
  background: "#1e293b",
  color: "#fff",
};

const th = {
  padding: "10px",
  border: "1px solid #ddd",
};

const td = {
  padding: "10px",
  border: "1px solid #ddd",
};