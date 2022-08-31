// import logo from './logo.svg';
import ChartDashboard from './pages/ChartDashborad';
import Login from './component/Login';
// import EmployerLogin from './pages/EmployerLogin';
// import EmployeeLogin from './pages/EmployeeLogin';
import './App.css';
// import {BrowserRouter , Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <>
      {/* <div className="App"> */}
        {/* <nav className="nav"> 
          <ul>
            <li>
              <Link to={"/employer"}>Employer Login</Link>
            </li>
            <li>
            <Link to={"/employee"}>Employee Login</Link>
            </li>
          </ul>
        </nav> */}
      {/* </div> */}
      {/* <BrowserRouter>
      <Routes>
       <Route path="/" element={<App />} />
        <Route path="/employer" element={<EmployerLogin isEmployer="true" />} />
        <Route path="/employer/barchart" element={<ChartDashboard isEmployer="true" />} />
        <Route path="/employer/barchart/employee-details" element={<EmployeeDetails /> }/>
        <Route path="employee" element={<EmployeeLogin isEmployer="false" />} />
        <Route path="/employee/barchart" element={<ChartDashboard isEmployer="false" />} />

      </Routes>
      </BrowserRouter> */}

      <Login />

     <ChartDashboard /> 
    
    {/* <EmployeeDetails /> */}
    </>
  );
}

export default App;
