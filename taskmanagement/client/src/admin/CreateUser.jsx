import { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, designation);

    try {
      let api = `${import.meta.env.VITE_BACKEND_URL}/admin/createuser`;
      const response = await axios.post(api, { name, email, designation });
      console.log("Response:", response.data);
      alert("User created successfully!");
      setName("");
      setEmail("");
      setDesignation("");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create New User</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Enter Employee Name:</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />

        <label style={styles.label}>Enter Email:</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />

        <label style={styles.label}>Select Designation:</label>
        <select
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          style={styles.select}
          required
        >
          <option value="">Select Designation</option>
          <option value="Analyst">Analyst</option>
          <option value="Programmer">Programmer</option>
          <option value="Coder">Coder</option>
          <option value="Designer">Designer</option>
          <option value="Data Base Designer">Data Base Designer</option>
        </select>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUser;

// Simple inline CSS
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "350px",
    backgroundColor: "#f9f9f9",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#444",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  select: {
    marginBottom: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
