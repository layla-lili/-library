import logo from "./logo.svg";
import "./App.css";
import Members from "./components/Members";
import AddMember from "./components/AddMember";
import { useState } from "react";



function App() {
  const [state,setState]=useState("");
  return (

  <div className="container">
    <div className="jumbotron mt-3 text-center">
      <div className="row align-center mb-2">
        <div className="col-4">
          <h3 className="text">Add member:</h3>
        </div>
      </div>
      <AddMember />
    </div>
    <Members />
  </div>

  );
}

export default App;




