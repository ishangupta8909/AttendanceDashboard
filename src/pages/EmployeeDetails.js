import "../css/EmployeeDetails.css";
import employees from "../EmployeeInfo";
import fb from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
// import { useState, useEffect } from "react";

export default function EmployeeDetails(props) {
    // const [employeeD,setEmployeeD]= useState({});

    // useEffect(() =>{
    //     let url ="/src/EmployeeInfo.js";
    //     fetch(url).then((res) => res.json()).then((employee => employees.filter((employeeD) => {
    //         return employee.id === props.id;
    //       }))
    // },[] )
    const emp = employees.find(function (e){
        return e.id === props.id;
    });
  return (
    <div className="contact">
      <ul className="contact-card">
        <p>{emp.name}</p>
        <img src={emp.imgURL} alt="img_emp" width="500" height="333" />
        <li>
          <h8>AGE</h8>
          <p>{emp.age}</p>
        </li>
        <li>
          <h8>SEX</h8>
          <p>{emp.sex}</p>
        </li>
        <li>
          <h8>ADDRESS</h8>
          <p>{emp.addr}</p>
        </li>
        <li>
          <h8>CONTACT</h8>
          <p>{emp.contactNo}</p>
          <p>{emp.email}</p>
        </li>
        <li>
            <h8>DATE OF BIRTH</h8>
            <p>{emp.dob}</p>
        </li>
        <li>
            <h8>JOINING DATE</h8>
            <p>{emp.joiningD}</p>
        </li>
      </ul>

      <footer className="footer">
        <p>stay in touch</p>
        <ul className="footer-list">
          <li>
          <a href="https://www.facebook.com/ishan.gupta0506/" target="_blank" >
            <img src={fb} />
            </a>
          </li>
          <li>
            <img src={twitter} />
          </li>
          <li>
          <a href="https://www.instagram.com/_ishangupta_/" target="_blank">
          <img href="" src={insta} />
          </a>
          </li>
          <li>
           <a href="https://www.linkedin.com/in/ishangupta8909/" target="_blank" >
            <img src={linkedin} width="28px" height="28px"  />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
//id 
// name, age, sex ,father's name, address,contact no,email,dob,marital status,confirmation date, joining date