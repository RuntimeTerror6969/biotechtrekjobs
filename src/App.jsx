// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./components/routing/ProtectedRoute";
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import JobList from "./components/jobs/JobList";
// import Profile from "./components/profile/Profile";
// import Navbar from "./components/layout/Navbar";
// import ApplicationList from "./components/applications/ApplicationList";
// import { ThemeProvider } from "./context/ThemeContext";
// import AboutCompany from "./components/company/AboutCompany";
// import TermsAndConditions from "./components/company/TermsAndConditions";
// import Footer from "./components/layout/Footer";
// import Layout from "./components/layout/Layout";
// import AddJobs from "./components/jobs/AddJobs";

// const App = () => {
//   return (
//     <Router>
//       <AuthProvider>
//         <ThemeProvider>
//           <div>
//             <Navbar />
//             <Routes>
//               <Route
//                 path="/register"
//                 element={
//                   <Layout>
//                     <Register />
//                   </Layout>
//                 }
//               />
//               <Route
//                 path="/login"
//                 element={
//                   <Layout>
//                     <Login />
//                   </Layout>
//                 }
//               />
//               <Route path="/jobs" element={<JobList />} />

//               <Route
//                 path="/post-job"
//                 element={
//                   <ProtectedRoute roles={["admin"]}>
//                     <AddJobs />
//                   </ProtectedRoute>
//                 }
//               />

//               <Route
//                 path="/applications"
//                 element={
//                   <ProtectedRoute roles={["candidate"]}>
//                     <ApplicationList />
//                   </ProtectedRoute>
//                 }
//               />

//               <Route
//                 path="/profile"
//                 element={
//                   <ProtectedRoute roles={["employer", "candidate"]}>
//                     <Profile />
//                   </ProtectedRoute>
//                 }
//               />

//               <Route path="/" element={<JobList />} />
//               <Route path="/company" element={<AboutCompany />} />
//               <Route path="/terms" element={<TermsAndConditions />} />
//             </Routes>
//           </div>
//         </ThemeProvider>
//       </AuthProvider>
//     </Router>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import AuthForm from "./components/auth/AuthForm";
import JobList from "./components/jobs/JobList";
import Profile from "./components/profile/Profile";
import Navbar from "./components/layout/Navbar";
import ApplicationList from "./components/applications/ApplicationList";
import { ThemeProvider } from "./context/ThemeContext";
import AboutCompany from "./components/company/AboutCompany";
import TermsAndConditions from "./components/company/TermsAndConditions";
import Footer from "./components/layout/Footer";
import Layout from "./components/layout/Layout";
import AddJobs from "./components/jobs/AddJobs";
import JobApplication from "./components/jobs/JobApplication";
import Contactus from "./components/company/Contactus";
import AdminTickets from "./components/profile/AdminTickets";
import PrivacyPolicy from "./components/company/PrivacyPolicy";
import FAQs from "./components/company/FAQs";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <div>
            <Navbar />

            <Routes>
              <Route
                path="/auth"
                element={
                  <Layout>
                    <AuthForm />
                  </Layout>
                }
              />
              <Route
                path="/login"
                element={
                  <Layout>
                    <AuthForm />
                  </Layout>
                }
              />
              <Route path="/jobs" element={<JobList />} />

              <Route
                path="/post-job"
                element={
                  <ProtectedRoute roles={["admin"]}>
                    <AddJobs />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/tickets"
                element={
                  <ProtectedRoute roles={["admin"]}>
                    <AdminTickets/>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/applications"
                element={
                  <ProtectedRoute roles={["candidate"]}>
                    <ApplicationList />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute roles={["employer", "candidate", "admin"]}>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              <Route path="/" element={<JobList />} />
              <Route path="/company" element={<AboutCompany />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              {/* <Route path="/applications" element={<ApplicationList />} /> */}
              <Route path= "/privacy" element={<PrivacyPolicy/>}/>
              <Route path="/faq" element={<FAQs />} />
              <Route path="/about" element={<AboutCompany />} />
              <Route
                path="/apply-job/:jobId"
                element={
                  <ProtectedRoute roles={["candidate"]}>
                    <JobApplication />
                  </ProtectedRoute>
                }
              />
              <Route path="/contactus" element={<Contactus />} />

            </Routes>

            <Footer />
          </div>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
