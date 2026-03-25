import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      
      {/* 🔹 Drawer */}
      <div
        style={{
          width: "220px",
          background: "#1e293b",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          position: "fixed",
          height: "100vh",
        }}
      >
        <h2 style={{ color: "#fff" }}>🩺Welcome, Dr. Paul</h2>

        <Link to="/overview" style={link}>Overview</Link>
        <Link to="/patient" style={link}>My Patients</Link>
        <Link to="/doctor" style={link}>Doctor</Link>
        <Link to="/employee" style={link}>Employee</Link>
        <Link to="/appointments" style={link}>Appointments</Link>
        <Link to="/attendance" style={link}>Attendance</Link>
        <Link to="/settings" style={link}>Settings</Link>
      </div>

      {/* 🔹 Page Content */}
      <div
        style={{
          marginLeft: "220px",
          width: "100%",
          padding: "20px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const link = {
  color: "#fff",
  textDecoration: "none",
  padding: "10px",
  borderRadius: "6px",
  background: "#334155",
};

export default Layout;