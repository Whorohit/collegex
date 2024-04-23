import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin";
import AdminLogin from "./Components/adminlogin";
import AdminDashboard from "./Components/AdminDashboard";
import UserDashboard from "./Components/UserDashboard";
import TeacherLogin from "./Components/TeacherLogin";
import Document from './Components/Document'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route   path="/" element={<UserLogin/>}/>
      <Route   path="/teacherLogin" element={<TeacherLogin/>}/>
      <Route path="/adminLogin" element={<AdminLogin/>}/>
      <Route path='/adminDashboard' element={<AdminDashboard/>}/>
      <Route path='/upload' element={<Document/>}/>
      <Route path="/userDashboard" element={<UserDashboard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
