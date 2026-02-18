import { useEffect, useState } from 'react';
import Home from './Home';
function ComplaintsTable() {
  const [complaints, setComplaints] = useState([]);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    async function fetchData() {
      try {
        let token = localStorage.getItem('token');
        const res = await fetch('http://localhost:3000/api/complaints', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization: token,
          },
        });
        const result = await res.json();
        setComplaints(result['complaints']);
      } catch (error) {
        console.error('Login failed:', error.error);
      }
    }
    fetchData();
  }, [complaints]);

  return (
    <div>
      <ul>
        {complaints
          .filter(
            (complaint) =>
              complaint.category === category || category === 'all',
          )
          .map((complaint) => (
            <li key={complaint._id}>
              <div>Category:{complaint.category}</div>
              <div>Message:{complaint.message}</div>
              <div>Date:{complaint.createdAt}</div>
            </li>
          ))}
      </ul>
      <select
        name="category"
        id="category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value=""> Choose a category</option>
        <option value="all"> All</option>
        <option value="food">Food</option>
        <option value="weapons">Weapons</option>
        <option value="uniform">Uniform</option>
        <option value="courses">Courses</option>
      </select>

      <Home></Home>
    </div>
  );
}

export default ComplaintsTable;
