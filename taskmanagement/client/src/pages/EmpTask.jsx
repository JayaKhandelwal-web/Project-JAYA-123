import axios from "axios";
import { useState, useEffect } from "react";

const EmpTask = () => {
  const [mydata, setMydata] = useState([]);
  const [show, setShow] = useState(false);
  const [tid, setTid] = useState("");
  const [input, setInput] = useState({});

  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setTid(id);
    setShow(true);
  };

  const loadData = async () => {
    try {
      let api = `${import.meta.env.VITE_BACKEND_URL}/employee/showtask/?id=${localStorage.getItem("empid")}`;
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const taskreportSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = `${import.meta.env.VITE_BACKEND_URL}/employee/taskreport`;
      const response = await axios.post(api, { tid, ...input });
      console.log(response.data);
      alert("Report Submitted!");
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  let sno = 0;

  return (
    <>
      <h1>Display Tasks</h1>
      <hr />

      {/* TABLE START */}
      <table border="1" width="100%" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Duration (Days)</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {mydata.map((task) => {
            sno++;
            return (
              <tr key={task._id}>
                <td>{sno}</td>
                <td>{task.tasktitle}</td>
                <td>{task.duration}</td>
                <td>{task.priority}</td>
                <td>
                  <button
                    style={{
                      padding: "5px 10px",
                      background: "green",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => handleShow(task._id)}
                  >
                    Send Report
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* TABLE END */}

      {/* CUSTOM MODAL (NO BOOTSTRAP) */}
      {show && (
        <div style={modalOverlay}>
          <div style={modalBox}>
            <h2>Send Task Report</h2>
            <form onSubmit={taskreportSubmit}>
              <label>Select Status</label>
              <select name="taskstatus" onChange={handleInput} required>
                <option>Choose...</option>
                <option value="Fully Completed">Fully Completed</option>
                <option value="Partial Completed">Partial Completed</option>
                <option value="Not Completed">Not Completed</option>
              </select>

              <label>Completion Day</label>
              <input type="text" name="completionday" onChange={handleInput} required />

              <label>Comment</label>
              <input type="text" name="comment" onChange={handleInput} required />

              <br /><br />

              <button type="submit" style={submitBtn}>Submit</button>
              <button type="button" onClick={handleClose} style={closeBtn}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

// Inline CSS (No Bootstrap)
const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalBox = {
  background: "white",
  padding: "20px",
  width: "400px",
  borderRadius: "8px",
};

const submitBtn = {
  padding: "8px 15px",
  background: "blue",
  color: "white",
  border: "none",
  cursor: "pointer",
  marginRight: "10px",
};

const closeBtn = {
  padding: "8px 15px",
  background: "red",
  color: "white",
  border: "none",
  cursor: "pointer",
};

export default EmpTask;
