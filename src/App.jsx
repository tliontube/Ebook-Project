import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ScrollTop from "./components/scrollTop/ScrollTop";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Thankyou from "./pages/thankyou/Thankyou";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForAdmin } from "./pages/protectedRoute/ProtectedRouteForAdmin";
import  Questions  from "./pages/questions/Questions";

const App = () => {
  return (
    <MyState>
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NoPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />
      </Routes>
      <Toaster />
    </Router>
    </MyState>
  );
};

export default App;
