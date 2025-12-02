import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AssignTask = () => {
  const [mydata, setMydata] = useState([]);
  const [show, setShow] = useState(false);
  const [tasktitle, setTaskTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [priority, setPriority] = useState("");
  const [empid, setEmpid] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setEmpid(id);
  };

  const loadData = async () => {
    try {
      let api = `${import.meta.env.VITE_BACKEND_URL}/admin/showuser`;
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const taskSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = `${import.meta.env.VITE_BACKEND_URL}/admin/taskassign`;
      await axios.post(api, { tasktitle, duration, priority, empid });
      toast.success("✅ Task assigned successfully!");
      setShow(false);
      setTaskTitle("");
      setDuration("");
      setPriority("");
    } catch (error) {
      console.log(error);
      toast.error("❌ Failed to assign task. Try again!");
    }
  };

  return (
    <div style={styles.page}>
      <ToastContainer position="top-right" autoClose={2000} />
      <h1 style={styles.heading}>Assign New Task</h1>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mydata.map((emp, i) => (
              <tr key={emp._id} style={styles.tableRow}>
                <td>{i + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.designation}</td>
                <td>
                  <button
                    style={styles.assignBtn}
                    onClick={() => handleShow(emp._id)}
                  >
                    Assign Task
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {show && (
        <div style={styles.modalBackdrop}>
          <div style={styles.modalBox}>
            <h2 style={styles.modalHeading}>Assign Task</h2>
            <form onSubmit={taskSubmit} style={styles.form}>
              <label style={styles.label}>Task Title</label>
              <input
                type="text"
                value={tasktitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                style={styles.input}
                required
              />

              <label style={styles.label}>Duration (in days)</label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                style={styles.input}
                required
              />

              <label style={styles.label}>Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                style={styles.select}
                required
              >
                <option value="">Select Priority</option>
                <option value="High Priority">High Priority</option>
                <option value="Medium Priority">Medium Priority</option>
                <option value="Low Priority">Low Priority</option>
              </select>

              <div style={styles.buttonRow}>
                <button type="submit" style={styles.submitBtn}>
                  Submit
                </button>
                <button type="button" onClick={handleClose} style={styles.cancelBtn}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignTask;

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    fontFamily: "'Poppins', sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "30px",
    letterSpacing: "1px",
  },
  tableContainer: {
    overflowX: "auto",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(6px)",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    padding: "15px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    color: "white",
  },
  tableRow: {
    transition: "background 0.3s",
  },
  assignBtn: {
    background: "linear-gradient(135deg, #00b09b, #96c93d)",
    border: "none",
    padding: "8px 15px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    fontWeight: "600",
    transition: "transform 0.2s, background 0.3s",
  },
  modalBackdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "fadeIn 0.3s ease",
  },
  modalBox: {
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(12px)",
    padding: "30px",
    borderRadius: "20px",
    width: "380px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  },
  modalHeading: {
    color: "#333",
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  label: {
    textAlign: "left",
    color: "#333",
    fontWeight: "500",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  select: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  submitBtn: {
    background: "linear-gradient(135deg, #43e97b, #38f9d7)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  cancelBtn: {
    background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
};
