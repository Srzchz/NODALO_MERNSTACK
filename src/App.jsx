import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import Navbar from "./components/navbar.jsx";

import Student from "./pages/student.jsx";
import StudentDetails from "./pages/studentDetails.jsx";
import AddStudents from "./pages/addStudents.jsx";
import students from "./data/students.json";

import AddTeacher from "./pages/addTeacher.jsx";
import Teacher from "./pages/teacher.jsx";
import TeacherDetails from "./pages/teacherDetails.jsx";
import teachers from "./data/teachers.json";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/student" element={<Student/>} />
            <Route path="/student/:id" element={<StudentDetails />} />
            <Route path="/add-student" element={<AddStudents students={students} />} />
            <Route path="/add-teacher" element={<AddTeacher teachers={teachers} />} />
            <Route path="/teacher" element={<Teacher teachers={teachers} />} />
            <Route path="/teacher/:id" element={<TeacherDetails />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
