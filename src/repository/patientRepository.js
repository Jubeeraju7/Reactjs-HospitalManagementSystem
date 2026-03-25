const BASE_URL = "http://localhost:5000";

export const getPatients = async () => {
  console.log("📡 GET /getpatients");

  const res = await fetch(`${BASE_URL}/getpatients`);
  return await res.json();
};

export const addPatient = async (patient) => {
  console.log("📤 Sending:", patient);

  const res = await fetch(`${BASE_URL}/addpatients`, { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patient), 
  });

  const data = await res.json();

  console.log("📥 Response:", data);

  return data;
};

export const getEmployees = async () => {
  const res = await fetch(`${BASE_URL}/employees`);
  return await res.json();
};

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

export const removeEmployee = async (id) => {
  const res = await fetch(`${BASE_URL}/employees/${id}`, {
    method: "DELETE",
  });

  return await res.json();
};