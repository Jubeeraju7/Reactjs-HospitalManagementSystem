import { Link } from "react-router-dom";
import bgImage from "../assets/background.jpg";

export default function Dashboard() {
  return (
    <div style={layout}>

      {/* 🔹 Drawer */}
      <div style={drawer}>
        <h2 style={{ color: "#fff" }}>🩺Welcome ,Dr. Paul</h2>
        <Link to="/overview" style={link}> Dashborad</Link>
        <Link to="/patient" style={link}>My Patients</Link>
        <Link to="/doctor" style={link}> Doctor</Link>
        <Link to="/employee" style={link}> Employee</Link>
        <Link to="/appointments" style={link}> Appointments</Link>
        <Link to="/attendance" style={link}> Attendance</Link>
        <Link to="/settings" style={link}> Settings</Link>
        <Link to="/logout" style={link}> Logout</Link>
      </div>

      {/* 🔹 Content */}
      <div style={content}>
        <h1 style={{ color: "#fff" }}> Overview </h1>

        {/* 🔹 SECTION 1 */}
        <div style={cardContainer}>

          <Link to="/patient" style={{ textDecoration: "none" }}>
            <div style={{ ...card, background: "#fff", cursor: "pointer" }}>
              <h3 style={{ color: "#0e0d0d" }}>Patient Registration</h3>
              <p style={{ color: "#0e0d0d" }}>120</p>
            </div>
          </Link>

          <Link to="/appointments" style={{ textDecoration: "none" }}>
            <div style={{ ...card, background: "#fff", cursor: "pointer" }}>
              <h3 style={{ color: "#0e0d0d" }}>Appointments</h3>
              <p style={{ color: "#0e0d0d" }}>15</p>
            </div>
          </Link>

          <Link to="/accessaries" style={{ textDecoration: "none" }}>
            <div style={{ ...card, background: "#fff", cursor: "pointer" }}>
              <h3 style={{ color: "#0e0d0d" }}>Acessossaries</h3>
              <p style={{ color: "#0e0d0d" }}>15</p>
            </div>
          </Link>

          <Link to="/staff alocated" style={{ textDecoration: "none" }}>
            <div style={{ ...card, background: "#fff", cursor: "pointer" }}>
              <h3 style={{ color: "#0e0d0d" }}>Staff alocated</h3>
              <p style={{ color: "#0e0d0d" }}>15</p>
            </div>
          </Link>
        </div>

        {/* 🔹 SECTION 2 */}
        <div style={cardContainer}>
          <div style={{ ...card, background: "#fff", }}>
            <h3 style={{ color: "#0e0d0d" }}>Today Patients</h3>
            <p style={{ color: "#0e0d0d" }}>8</p>
          </div>

          <div style={{ ...card, background: "#fff", }}>
            <h3 style={{ color: "#0e0d0d" }}>Today Doctor</h3>
            <p style={{ color: "#0e0d0d" }}>8</p>
          </div>

          <div style={{ ...card, background: "#fff", }}>
            <h3 style={{ color: "#0e0d0d" }}>Completed</h3>
            <p style={{ color: "#0e0d0d" }}>5</p>
          </div>
        </div>

        {/* 🔹 BUTTONS
        <div style={{ marginTop: "30px" }}>
          <Link to="/patients">
            <button style={button}>➕ Add Patient</button>
          </Link>

          <Link to="/appointments">
            <button style={buttonSecondary}>📅 Appointments</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

/* 🎨 STYLES */

const layout = {
  display: "flex",
  minHeight: "100vh",
};

const drawer = {
  width: "220px",
  background: "#1e293b",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",

  position: "fixed",   
  top: 0,
  left: 0,
  height: "100vh",
};
const link = {
  color: "#fff",
  textDecoration: "none",
  padding: "10px",
  borderRadius: "6px",
  background: "#334155",
};

// const content = {
//   flex: 1,
//   padding: "30px",
//   minHeight: "100vh",
//   position: "relative",

//   backgroundImage: `url(${bgImage})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
// };

const content = {
  marginLeft: "220px",   
  flex: 1,
  padding: "30px",
  minHeight: "100vh",

  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const cardContainer = {
  display: "flex",
  gap: "20px",
  marginTop: "15px",
  flexWrap: "wrap",
};

const card = {
  padding: "20px",
  borderRadius: "12px",
  width: "220px",
  color: "#fff",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
};

const button = {
  padding: "10px 20px",
  borderRadius: "8px",
  border: "none",
  background: "#007bff",
  color: "#fff",
  marginRight: "10px",
  cursor: "pointer",
};

const buttonSecondary = {
  ...button,
  background: "#28a745",
};