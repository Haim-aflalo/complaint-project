import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminConnect from './components/AdminConnect';
import ComplaintsPage from './pages/ComplaintsPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AdminConnect />} />
        <Route path="/complaints" element={<ComplaintsPage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
