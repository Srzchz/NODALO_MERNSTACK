import StudentCard from "./components/studentcard.jsx";

function App() {
  return (
    <div className="App">
      <StudentCard name="Charles" age={23} studentNumber="202400926" course="Information Technologies" />
      <StudentCard name="John Yevs Bryan" age={20} studentNumber="202404436" course="Information Technologies" />
      <StudentCard name="Jhomer" age={21} studentNumber="202405742" course="Information Technologies" />
    </div>
  );
}

export default App;
