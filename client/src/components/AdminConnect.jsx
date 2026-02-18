import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminConnect() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  async function login(event) {
    event.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password,
        }),
      });

      const result = await res.json();

      if (result.error) {
        navigate('/login');
      } else {
        navigate('/admin');
      }
    } catch (error) {
      console.error('Login failed:', error.error);
    }
  }
  return (
    <>
      <h2>Only Commanders</h2>
      <p>get all the complaints</p>
      <form>
        <input
          type="text"
          id="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" onClick={login}>
          Submit
        </button>
      </form>
    </>
  );
}

export default AdminConnect;
