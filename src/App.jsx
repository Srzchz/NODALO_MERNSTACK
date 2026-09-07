import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import Student from "./pages/student.jsx";
import StudentDetails from "./pages/studentDetails.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/student" element={<Student/>} />
            <Route path="/student/:id" element={<StudentDetails />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
