import { useNavigate } from 'react-router-dom';

function ComplaintsLink() {
  const navigate = useNavigate();
  function nav() {
    navigate('/send');
  }
  return (
    <div class="complaint">
      <h1>Anonymous Complaints</h1>
      <p>Send a complaints about your problem</p>
      <button class="submit" onClick={nav}>
        Send a complaint
      </button>
    </div>
  );
}

export default ComplaintsLink;
