import { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = `${import.meta.env.VITE_BACKEND_URL}/admin/createuser`;
      const response = await axios.post(api, { name, email, designation });
      alert("🎉 User created successfully!");
      setName("");
      setEmail("");
      setDesignation("");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error creating user:", error);
      alert("❌ Failed to create user. Please try again.");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>👤 Create New User</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Employee Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Designation</label>
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
            <option value="Database Designer">Database Designer</option>
          </select>

          <button type="submit" style={styles.button}>
            🚀 Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;

// 🎨 Styles
const styles = {
  page: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    fontFamily: "'Poppins', sans-serif",
  },

  card: {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    padding: "40px 35px",
    width: "380px",
    textAlign: "center",
    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
    animation: "fadeIn 1s ease-in-out",
  },

  heading: {
    color: "#fff",
    fontSize: "24px",
    marginBottom: "25px",
    fontWeight: "600",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  label: {
    textAlign: "left",
    fontSize: "14px",
    fontWeight: "500",
    color: "#e0e0e0",
  },

  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.3)",
    fontSize: "15px",
    outline: "none",
    color: "#333",
    background: "rgba(255,255,255,0.9)",
    transition: "all 0.3s ease",
  },

  select: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.3)",
    fontSize: "15px",
    outline: "none",
    background: "rgba(255,255,255,0.9)",
    color: "#333",
    transition: "all 0.3s ease",
  },

  button: {
    marginTop: "10px",
    background: "linear-gradient(135deg, #43e97b, #38f9d7)",
    color: "#222",
    border: "none",
    borderRadius: "12px",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  },
};

// ✨ Hover & focus styles via inline effect injection
document.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT") {
    e.target.style.boxShadow = "0 0 10px rgba(255,255,255,0.5)";
  }
});
document.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT") {
    e.target.style.boxShadow = "none";
  }
});
document.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.style.transform = "scale(1.05)";
    e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
  }
});
document.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
  }
});
