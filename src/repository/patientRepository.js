const BASE_URL = "http://localhost:5000";

// ✅ GET
export const getPatients = async () => {
  console.log("📡 GET /getpatients");

  const res = await fetch(`${BASE_URL}/getpatients`);
  return await res.json();
};

// ✅ POST
export const addPatient = async (patient) => {
  console.log("📤 Sending:", patient);

  const res = await fetch(`${BASE_URL}/addpatients`, { // ✅ correct URL
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patient), // ✅ VERY IMPORTANT
  });

  const data = await res.json();

  console.log("📥 Response:", data);

  return data;
};


// 🔹 GET Employees
export const getEmployees = async () => {
  const res = await fetch(`${BASE_URL}/employees`);
  return await res.json();
};

// 🔹 ADD Employee
export const createEmployee = async (employee) => {
  const res = await fetch(`${BASE_URL}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });

  const data = await res.json();

  console.log("📥 Response:", data);

  return data;
};

// 🔹 DELETE Employee
export const removeEmployee = async (id) => {
  const res = await fetch(`${BASE_URL}/employees/${id}`, {
    method: "DELETE",
  });

  return await res.json();
};