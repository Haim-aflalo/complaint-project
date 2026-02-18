import { useEffect, useState } from 'react';
import Home from './Home';
function ComplaintsTable() {
  const [complaints, setComplaints] = useState([]);

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
        {complaints.map((complaint) => (
          <li key={complaint._id}>
            <div>Category:{complaint.category}</div>
            <div>Category:{complaint.message}</div>
          </li>
        ))}
      </ul>
      <Home></Home>
    </div>
  );
}

export default ComplaintsTable;
