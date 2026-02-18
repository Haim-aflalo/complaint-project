import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };
  return <button onClick={goHome}>Home</button>;
}

export default Home;
