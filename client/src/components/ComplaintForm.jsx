import { useState } from 'react';
import Home from './Home';
function ComplaintForm() {
  const [data, setData] = useState({ category: '', message: '' });
  // const [result, setResult] = useState({});
  async function createComplaint(event) {
    event.preventDefault();
    const res = await fetch('http://localhost:3000/api/complaints', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: data.category,
        message: data.message,
      }),
    });
    // setResult(await res.json());
  }

  return (
    <>
      <h1>Complaints Form</h1>
      <form>
        <select
          name="category"
          id="category"
          onChange={(e) => {
            setData({ ...data, category: e.target.value });
          }}
        >
          <option value=""> Choose a category</option>
          <option value="food">Food</option>
          <option value="weapons">Weapons</option>
          <option value="uniform">Uniform</option>
          <option value="courses">Courses</option>
        </select>
        <textarea
          name="complaints"
          id="complaints"
          onChange={(e) => {
            setData({ ...data, message: e.target.value });
          }}
        ></textarea>
        <button type="submit" onClick={createComplaint}>
          Submit
        </button>
        {/* <div id="result">{result.message}</div> */}
      </form>
      <Home></Home>
    </>
  );
}

export default ComplaintForm;
