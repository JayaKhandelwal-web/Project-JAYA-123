import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const AdminDashBoard = () => {
  const [active, setActive] = useState("");

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Admin Dashboard</h1>
      </header>

      <div style={styles.container}>
        {/* Sidebar */}
        <nav style={styles.sidebar}>
          <h3 style={styles.menuTitle}>Menu</h3>

          <Link
            to="create-user"
            onClick={() => setActive("create-user")}
            style={{
              ...styles.link,
              ...(active === "create-user" ? styles.activeLink : {}),
            }}
          >
            👤 Create User
          </Link>

          <Link
            to="assign-task"
            onClick={() => setActive("assign-task")}
            style={{
              ...styles.link,
              ...(active === "assign-task" ? styles.activeLink : {}),
            }}
          >
            📝 Assign Task
          </Link>

            <Link to="see-report" className="adminmenu">See Reports   </Link>
        </nav>

        {/* Main Content */}
        <main style={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashBoard;

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "'Poppins', sans-serif",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
  },

  header: {
    padding: "20px 0",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },

  title: {
    fontSize: "2rem",
    fontWeight: "700",
    letterSpacing: "1px",
  },

  container: {
    display: "flex",
    flex: 1,
  },

  sidebar: {
    width: "240px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    boxShadow: "4px 0 10px rgba(0, 0, 0, 0.2)",
  },

  menuTitle: {
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#eee",
    borderBottom: "2px solid rgba(255,255,255,0.2)",
    paddingBottom: "8px",
  },

  link: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: "500",
    padding: "10px 15px",
    borderRadius: "10px",
    transition: "all 0.3s ease",
    background: "rgba(255, 255, 255, 0.05)",
  },

  activeLink: {
    background: "linear-gradient(135deg, #43e97b, #38f9d7)",
    color: "#222",
    fontWeight: "600",
    transform: "translateX(5px)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },

  linkHover: {
    background: "rgba(255,255,255,0.2)",
  },

  content: {
    flex: 1,
    padding: "30px",
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(10px)",
    borderRadius: "12px",
    margin: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    overflowY: "auto",
  },
};
