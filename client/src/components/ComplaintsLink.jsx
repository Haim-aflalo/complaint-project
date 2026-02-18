import { useNavigate } from 'react-router-dom';

function ComplaintsLink() {
  const navigate = useNavigate();
  function nav() {
    navigate('/complaints');
  }
  return (
    <>
      <h1>Anonymous Complaints</h1>
      <p>Send a complaints about your problem</p>
      <button onClick={nav}>Send a complaint</button>
    </>
  );
}

export default ComplaintsLink;
