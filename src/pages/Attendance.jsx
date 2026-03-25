import React, { useState } from "react";
// import axios from "axios";
import Layout from "./layout";

const AttendancePage = () => {
  const [employees, setEmployees] = useState([]);
  const [date, setDate] = useState("");
  const [department, setDepartment] = useState("");
  const [shift, setShift] = useState("");
  const [entries, setEntries] = useState(10);

  // 🔹 Fetch Employees
  const getEmployees = async () => {
    try {
      const res = await axios.get("/api/employees", {
        params: { department, shift },
      });

      const updated = res.data.map((emp) => ({
        ...emp,
        inTime: "",
        outTime: "",
        status: "Present",
      }));

      setEmployees(updated);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔹 Handle Change
  const handleChange = (index, field, value) => {
    const updated = [...employees];
    updated[index][field] = value;
    setEmployees(updated);
  };

  // 🔹 Submit
  const handleSubmit = async () => {
    try {
      await axios.post("/api/attendance/bulk", {
        date,
        attendance: employees,
      });
      alert("Attendance Submitted ✅");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <div style={{ padding: "30px" }}>
        <h2>Daily Attendance</h2>

        {/* 🔹 Divider */}
        <hr
          style={{
            margin: "10px 0 20px",
            border: "none",
            height: "2px",
            background: "#1e293b",
          }}
        />

        {/* 🔹 Filters */}
        <div style={filterContainer}>
          <div style={field}>
            <label style={label}>Department</label>
            <select style={inputStyle} onChange={(e) => setDepartment(e.target.value)}>
              <option>All Departments</option>
              <option>Cardiology</option>
              <option>Neurology</option>
            </select>
          </div>

          <div style={field}>
            <label style={label}>Shift</label>
            <select style={inputStyle} onChange={(e) => setShift(e.target.value)}>
              <option>All Shifts</option>
              <option>Day</option>
              <option>Night</option>
            </select>
          </div>

          <div style={field}>
            <label style={label}>Date</label>
            <input
              type="date"
              style={inputStyle}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <button style={btnStyle} onClick={getEmployees}>
            Get Employees
          </button>
        </div>

        {/* 🔹 Show Entries */}
        <div style={{ marginBottom: "10px" }}>
          <span>Show </span>
          <select
            value={entries}
            onChange={(e) => setEntries(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <span> entries</span>
        </div>

        {/* 🔹 Table */}
        <table style={tableStyle}>
          <thead style={{ background: "#1e293b", color: "#fff" }}>
            <tr>
              <th style={th}>ID</th>
              <th style={th}>Name</th>
              <th style={th}>Shift</th>
              <th style={th}>In Time</th>
              <th style={th}>Out Time</th>
              <th style={th}>Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.slice(0, entries).map((emp, index) => (
              <tr key={emp._id}>
                <td style={td}>{emp._id}</td>
                <td style={td}>{emp.name}</td>
                <td style={td}>{emp.shift}</td>

                <td style={td}>
                  <input
                    type="time"
                    value={emp.inTime}
                    onChange={(e) =>
                      handleChange(index, "inTime", e.target.value)
                    }
                  />
                </td>

                <td style={td}>
                  <input
                    type="time"
                    value={emp.outTime}
                    onChange={(e) =>
                      handleChange(index, "outTime", e.target.value)
                    }
                  />
                </td>

                <td style={td}>
                  <select
                    value={emp.status}
                    onChange={(e) =>
                      handleChange(index, "status", e.target.value)
                    }
                  >
                    <option>Present</option>
                    <option>Absent</option>
                    <option>Weekly Off</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 🔹 Info */}
        <p>
          Showing 1 to {Math.min(entries, employees.length)} of{" "}
          {employees.length} entries
        </p>

        {/* 🔹 Submit */}
        <button style={submitBtn} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </Layout>
  );
};

export default AttendancePage;

const filterContainer = {
  display: "flex",
  gap: "30px",
  marginBottom: "20px",
  alignItems: "flex-end",
  flexWrap: "wrap",
};

const field = {
  display: "flex",
  flexDirection: "column",
};

const label = {
  fontWeight: "bold",
  marginBottom: "5px",
};

const inputStyle = {
  width: "220px",
  height: "50px",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "6px",
};

const btnStyle = {
  height: "35px",
  padding: "0 15px",
  background: "#1e293b",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const th = {
  padding: "10px",
  border: "1px solid #ddd",
};

const td = {
  padding: "10px",
  border: "1px solid #ddd",
};

const submitBtn = {
  marginTop: "20px",
  padding: "10px 20px",
  background: "green",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
};