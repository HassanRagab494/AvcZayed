// src/App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputPage from './pages/INPUT/InputPage';
import DisplayPage from './pages/TO-DAY/DisplayPage';
import Homee from './pages/Home/Homee';
import MonthlyTasksPage from './pages/MonthlyTasksPage/MonthlyTasksPage';
import AllDataPage from './pages/AllDataPage/AllDataPage';
import PreviousYearDataPage from './pages/AllDataPage/PreviousYearDataPage';
import UpcomingTasksPage from './pages/MonthlyTasksPage/UpcomingTasksPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard'; // إضافة الاستيراد
import ProtectedRoute from './combnits/PrivateRoute'; // إضافة الاستيراد
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'
import TomorrowTasksPage from 'pages/TO-DAY/TomorrowTasksPage';


function App() {
  useEffect(() => {
    Aos.init({duration:1200})
    return () => {
      
    };
  }, []);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homee />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/Task" element={<ProtectedRoute element={<InputPage />} />} />
          <Route path="/Today" element={<ProtectedRoute element={<DisplayPage />} />} />
          <Route path="/Tomorrow" element={<ProtectedRoute element={<TomorrowTasksPage />} />} />
          <Route path="/Monthly" element={<ProtectedRoute element={<MonthlyTasksPage />} />} />
          <Route path="/last" element={<ProtectedRoute element={<PreviousYearDataPage />} />} />
          <Route path="/months" element={<ProtectedRoute element={<UpcomingTasksPage />} />} />
          <Route path="/AllDataPage" element={<ProtectedRoute element={<AllDataPage />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
