import logo from "./logo.svg";
import "./App.css";
import Members from "./components/Members";
import AddMember from "./components/AddMember";
import Books from "./components/Books";
import AddBook from "./components/AddBook";
import { Route, Switch } from "react-router";
import { useState } from "react";
import members from "./members";
import MemberList from "./components/MemberList";
import BookDetails from "./components/BookDetails";
import books from "./books";
import BookDoubleList from "./components/BookDoubleList";
import MemberDetails from "./components/MemberDetails";
function App() {
  const [_members, setMember] = useState(members);
  const [_book, setBook] = useState(books);

  return (
    <div className="container">
      <div className="jumbotron mt-3 text-center">
        <div className="row align-center mb-2">
          <div className="col-4">
            <h3 className="text">Library</h3>
          </div>
        </div>
      </div>
      <Switch>

      <Route path="/book/:bookSlug">
          <BookDetails book={_book} />
        </Route>


        <Route path="member/:memberSlug">
          <MemberDetails member={_members} />
        </Route>

      

        <Route path="/member">
          <MemberList member={_members} />
        </Route>


        <Route path="/addbook">
          <AddBook  />
        </Route>
        <Route path="/addmember">
          <AddMember  />
        </Route>
     

        <Route path="/book">
          <BookDoubleList book={_book} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
