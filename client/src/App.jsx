import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SendPage from './pages/SendPage';
import ComplaintsTable from './components/ComplaintsTable';
// import ProtectedRoute from './routes/ProtectedRoute';
import './styles/App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/send" element={<SendPage />} />
        <Route path="/complaints" element={<ComplaintsTable />} />
        {/* <ProtectedRoute>
          <ComplaintsTable />
        </ProtectedRoute> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
