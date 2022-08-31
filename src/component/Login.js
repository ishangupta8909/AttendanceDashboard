import React, {useState} from "react";
import '../css/Login.css';

export default function Login(props) {
    const [details, setDetails] = useState({
        user: "",
        pass: ""
      });
    
      // function handleEvent(){ }
      function handleChanges(event) {
        const { value, name } = event.target;
        setDetails((prevValue) => {
          return {
            ...prevValue,
            [name]: value
          };
        });
        
        if(details.user === "employer" && details.pass === "123"){
           console.log("Welcome " + details.user + " Employer of 5 persons");
        }
        else if(details.user === "employee" && details.pass === "123"){
            console.log("Welcome " + details.user + " Employers Wish IS YOUR COMMAND");
        }
        event.preventDefault();
      }
    return (
        <>
    <div className="container">
      <h1>Hello {details.user} </h1>
      <div className="form-area">
        <form>
          <input
            type="text"
            value={details.user}
            name="user"
            placeholder="Username"
            onChange={handleChanges}
          />
          <input
            type="password"
            value={details.pass}
            name="pass"
            placeholder="Password"
            onChange={handleChanges}
          />
          <button type="submit" onClick={() => {props.onChecked(true)}} >Submit</button>
        </form>
      </div>
    </div>
    </>
    );
}