import StudentCard from "./components/studentcard.jsx";
import SubjectCard from "./components/subject.jsx";

function App() {
  return (
    <div className="App">
      <StudentCard name="Charles" age={23} studentNumber="202400926" course="Information Technologies" />
      <StudentCard name="John Yevs Bryan" age={20} studentNumber="202404436" course="Information Technologies" />
      <StudentCard name="Jhomer" age={21} studentNumber="202405742" course="Information Technologies" />

      <SubjectCard subjectCode="DCIT 26" subjectName="Application and Development" schedule="Mon 5:30 PM - 7:00 PM, Tue 11:00 AM - 1:00 PM" />

    </div>
  );
}

export default App;
