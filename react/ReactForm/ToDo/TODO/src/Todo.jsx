import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {

  // 1. State for input
  const [activity, setActivity] = useState("");

  // 2. State for list
  const [listdata, setListdata] = useState([]);

  // 3. Add function
  function addActivity() {
    if (activity.trim() === "") return; // empty input avoid

    setListdata((prevList) => {
      const updatedList = [...prevList, activity];
      return updatedList;
    });

    setActivity(""); // clear input
  }

  // 4. Remove function
  function removeActivity(index) {
    const updatedData = listdata.filter((_, i) => i !== index);
    setListdata(updatedData);
  }

  return (
    <div className='container'>
      <h1>To Do List</h1>

      {/* 5. Input */}
      <input
        id='input'
        type='text'
        placeholder='Enter name'
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />

      <button onClick={addActivity}>Add</button>

      <p className='heading'>Here is your list :)</p>

      {/* 6. List Rendering */}
      {listdata.length > 0 &&
        listdata.map((data, i) => (
          <div key={i} className='item'>
            <span className='listdata'>{data}</span>
            <button onClick={() => removeActivity(i)}>Remove</button>
          </div>
        ))
      }
    </div>
  );
};

export default Todo;