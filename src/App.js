import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./sass/style.css";

import UsersLists from "./components/UsersList";
import User from "./components/User";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faMapMarkerAlt);

function App() {
  return (
    <div className="App">
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<UsersLists />}></Route>
          <Route path="/user:_id" element={<User />}></Route>
        </Routes>{" "}
      </Router>
    </div>
  );
}

export default App;
