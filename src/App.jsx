import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/auth/Login";
import JobList from "./components/jobs/JobList";
import Navbar from "./components/layout/Navbar";
import Profile from "./components/profile/Profile";
import Register from "./components/auth/Register";
import ApplicationList from "./components/applications/ApplicationList";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/applications" element={<ApplicationList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<JobList />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
