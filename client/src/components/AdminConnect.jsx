import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminConnect() {
  const [password, setPassword] = useState('');
  const [incorrectPassword, setIncorrectPassword] = useState(false);
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
      localStorage.setItem('token', `Bearer ${result.token}`);

      if (result.error) {
        setIncorrectPassword(true);
      } else {
        navigate('/complaints');
      }
    } catch (error) {
      console.error('Login failed:', error.error);
    }
  }
  return (
    <div class="connection">
      <h2>Only Commanders</h2>
      <p>get all the complaints</p>
      <form>
        <input
          type="text"
          class="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button class="submit" type="submit" onClick={login}>
          Submit
        </button>
        {incorrectPassword && <p>Incorrect Password</p>}
      </form>
    </div>
  );
}

export default AdminConnect;
