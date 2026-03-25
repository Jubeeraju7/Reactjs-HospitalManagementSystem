import { useState } from "react";

export default function Settings() {
    const [doctor, setDoctor] = useState({
        name: "Dr. Paul",
        email: "paul@gmail.com",
        specialization: "Cardiologist",
        fee: 500,
        startTime: "09:00",
        endTime: "18:00",
    });

    const handleChange = (e) => {
        setDoctor({ ...doctor, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        console.log("Saved Data:", doctor);
        alert("Settings Saved!");
    };

    return (
        <div style={{ padding: "30px" }}>
            <h2>⚙️ Doctor Settings</h2>

            {/* Profile */}
            <h3>Profile</h3>
            <input name="name" value={doctor.name} onChange={handleChange} placeholder="Name" /><br /><br />
            <input name="email" value={doctor.email} onChange={handleChange} placeholder="Email" /><br /><br />
            <input name="specialization" value={doctor.specialization} onChange={handleChange} placeholder="Specialization" />

            {/* Availability */}
            <h3>Availability</h3>
            <input type="time" name="startTime" value={doctor.startTime} onChange={handleChange} />
            <input type="time" name="endTime" value={doctor.endTime} onChange={handleChange} />

            {/* Fees */}
            <h3>Consultation Fee</h3>
            <input type="number" name="fee" value={doctor.fee} onChange={handleChange} />

            <br /><br />
            <button onClick={handleSubmit}>💾 Save Settings</button>
        </div>
    );
}