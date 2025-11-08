import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUserType] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (usertype === "admin") {
      try {
        let api = `${import.meta.env.VITE_BACKEND_URL}/admin/login`;
        const response = await axios.post(api, { email, password });
        console.log(response);

        localStorage.setItem("adminname", response.data.admin.name);
        localStorage.setItem("adminemail", response.data.admin.email);

        toast.success(response.data.msg);
        setTimeout(() => {
          navigate("/admin-dashboard");
        }, 2000);
      } catch (error) {
        toast.error(error.response?.data?.msg || "Login failed");
      }
    } else {
      alert("Employee");
    }
  };

  return (
    <>
      {/* Header */}
      <header
        style={{
          backgroundColor: "#4a90e2",
          color: "white",
          padding: "15px 0",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        TASK MANAGEMENT SYSTEM
      </header>

      {/* Login Box */}
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(to right, #e0f7fa, #e1bee7, #f3e5f5)",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            width: "350px",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            User Login
          </h2>

          <label style={{ fontWeight: "bold" }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "10px",
              margin: "8px 0 15px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              outlineColor: "#4a90e2",
            }}
          />

          <label style={{ fontWeight: "bold" }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "10px",
              margin: "8px 0 15px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              outlineColor: "#4a90e2",
            }}
          />

          <label style={{ fontWeight: "bold" }}>Login As:</label>
          <select
            value={usertype}
            onChange={(e) => setUserType(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              margin: "8px 0 15px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              outlineColor: "#4a90e2",
            }}
          >
            <option value="">Select user type</option>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#4a90e2",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            Login
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#4a90e2",
          color: "white",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} 
          www.mytaskmanagement.com all right reserved 2025.
      </footer>

      <ToastContainer position="top-center" />
    </>
  );
};

export default Home;
