import logo from "./logo.svg";
import "./App.css";
import Members from "./components/Members";
import AddMember from "./components/AddMember";
import Books from "./components/Books";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div className="container">
      <div className="jumbotron mt-3 text-center">
        <div className="row align-center mb-2">
          <div className="col-4">
            <h3 className="text">Add member:</h3>
          </div>
        </div>
        <Books />
        {/* <Members />*/}
      </div>
      <AddBook />

      {/*     <AddMember />
       */}
    </div>
  );
}

export default App;
