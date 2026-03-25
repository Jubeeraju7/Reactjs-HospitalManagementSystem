import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getEmployees,
  createEmployee,
  removeEmployee,
} from "../repository/patientRepository";

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

  // 🔹 Load Employees
  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  // 🔹 Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Add Employee
  const handleAdd = async () => {
    if (!form.name || !form.role || !form.phone) {
      return alert("Fill required fields");
    }

    await createEmployee(form);

    setForm({
      name: "",
      role: "",
      phone: "",
      age: "",
      address: "",
    });

    setShowForm(false); // ✅ close popup
    loadEmployees();
  };

  // 🔹 Delete
  const handleDelete = async (id) => {
    await removeEmployee(id);
    loadEmployees();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Employee</h2>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <button style={backBtn} onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate("/dashboard"); // change to your page
          }
        }}
        >
          ⬅ Back
        </button>

        <button style={button} onClick={() => setShowForm(true)}>
          ➕ Add Employee
        </button>
      </div>
      {/* <button style={backBtn} onClick={() => navigate(-1)}>
        ⬅ Back
      </button> */}

      {/* 🔹 Add Button
      <button style={button} onClick={() => setShowForm(true)}>
        ➕ Add Employee
      </button> */}
      {/* <div style={{ textAlign: "right", marginBottom: "10px" }}>
        <button style={button} onClick={() => setShowForm(true)}>
          ➕ Add Employee
        </button>
      </div> */}

      {/* 🔹 Popup Modal */}
      {showForm && (
        <div style={overlay}>
          <div style={modal}>
            <h3>Add Employee</h3>

            <input style={input} name="name" placeholder="Name" value={form.name} onChange={handleChange} />
            <input style={input} name="age" placeholder="Age" value={form.age} onChange={handleChange} />
            <input style={input} name="address" placeholder="Address" value={form.address} onChange={handleChange} />
            <input style={input} name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />

            <select style={input} name="role" value={form.role} onChange={handleChange}>
              <option value="">Select Role</option>
              <option>Doctor</option>
              <option>Nurse</option>
              <option>Receptionist</option>
            </select>

            <div style={{ marginTop: "10px" }}>
              <button style={button} onClick={handleAdd}>✅ Save</button>
              <button style={cancelBtn} onClick={() => setShowForm(false)}>❌ Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* 🔹 Table */}
      <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp._id}>
              <td>{index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.address}</td>
              <td>{emp.age}</td>
              <td>{emp.phone}</td>
              <td>{emp.role}</td>
              <td>
                <button onClick={() => handleDelete(emp._id)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* 🔹 Styles */


const backBtn = {
  padding: "8px 12px",
  background: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginBottom: "10px",
  textAlign: "left"
};

const input = {
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  width: "100%",
};

const button = {
  padding: "10px 15px",
  border: "none",
  background: "#ff0000",
  color: "#fff",
  borderRadius: "6px",
  cursor: "pointer",
  marginRight: "10px",
};

const cancelBtn = {
  padding: "10px",
  background: "gray",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
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
  padding: "40px",
  borderRadius: "10px",
  width: "30%",
  display: "flex",
  flexDirection: "column",
};

// import { useState } from "react";

// export default function EmployeeDetails() {
//     const [employees, setEmployees] = useState([]);
//     const [form, setForm] = useState({
//         name: "",
//         role: "",
//         phone: "",
//     });

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const addEmployee = () => {
//         if (!form.name || !form.role) return alert("Fill all fields");

//         setEmployees([...employees, form]);
//         setForm({ name: "", role: "", phone: "" });
//     };

//     const deleteEmployee = (index) => {
//         const updated = employees.filter((_, i) => i !== index);
//         setEmployees(updated);
//     };

//     return (
//         <div style={{ padding: "30px" }}>
//             <h2>👨‍💼 Employee Management</h2>

//             {/* 🔹 Add Employee Form */}
//             <h3>Add Employee</h3>
//             <input name="name" placeholder="Name" value={form.name} onChange={handleChange} /><br /><br />
//             <input name="role" placeholder="Role (Doctor/Nurse)" value={form.role} onChange={handleChange} /><br /><br />
//             <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} /><br /><br />

//             <button onClick={addEmployee}>➕ Add Employee</button>

//             {/* 🔹 Employee List */}
//             <h3 style={{ marginTop: "30px" }}>Employee List</h3>

//             <table border="1" cellPadding="10" style={{ marginTop: "10px", width: "100%" }}>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>Address</th>
//                         <th>Role</th>
//                         <th>Phone</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {employees.map((emp, index) => (
//                         <tr key={index}>
//                             <td>{emp.name}</td>
//                             <td>{emp.role}</td>
//                             <td>{emp.phone}</td>
//                             <td>
//                                 <button onClick={() => deleteEmployee(index)}>❌ Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }