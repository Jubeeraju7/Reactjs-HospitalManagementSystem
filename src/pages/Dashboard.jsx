import { Link } from "react-router-dom";
import Layout from "./Layout";
import bgImage from "../assets/background.jpg";

export default function Dashboard() {
  return (
    <Layout>
      <div style={wrapper}>
        <div style={content}>
          <h1 style={{ color: "#fff" }}>Overview</h1>
          <hr style={divider} />

          {/* SECTION 1 */}
          <div style={cardContainer}>
            <Link to="/patient" style={linkReset}>
              <div style={card}>
                <h3>Patient Registration</h3>
                <p>120</p>
              </div>
            </Link>

            <Link to="/appointments" style={linkReset}>
              <div style={card}>
                <h3>Appointments</h3>
                <p>15</p>
              </div>
            </Link>

            <Link to="/accessories" style={linkReset}>
              <div style={card}>
                <h3>Accessories</h3>
                <p>15</p>
              </div>
            </Link>

            <Link to="/staff" style={linkReset}>
              <div style={card}>
                <h3>Staff Allocated</h3>
                <p>15</p>
              </div>
            </Link>
          </div>

          {/* SECTION 2 */}
          <div style={cardContainer}>
            <div style={card}>
              <h3>Today Patients</h3>
              <p>8</p>
            </div>

            <div style={card}>
              <h3>Today Doctors</h3>
              <p>8</p>
            </div>

            <div style={card}>
              <h3>Completed</h3>
              <p>5</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const wrapper = {
  width: "100%",
  minHeight: "80vh",
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const content = {
  padding: "150px",
  minHeight: "100vh",
  margin: 0,   
};

// const content = {
//   padding: 0,   // ✅ clean
//   margin: 0,    // ✅ add this
//   minHeight: "100vh",

//   backgroundImage: `url(${bgImage})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
// };

const divider = {
  margin: "10px 0 20px",
  border: "none",
  height: "2px",
  background: "#1e293b",
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
  background: "#ffffff",
  color: "#000",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  cursor: "pointer",
  transition: "0.3s",
};

const linkReset = {
  textDecoration: "none",
};