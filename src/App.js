import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Header from "./containers/Header";
import SignupPage from "./containers/Signup";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import LoginPage from "./containers/Login";
library.add(faSpinner, faHeart, faSearch);

function App() {
  const [valueRange, setValueRange] = useState([50, 130]);
  const [statusSwitch, setStatusSwitch] = useState(true);
  const [valueInputSearch, setValueInputSearch] = useState("");
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 1 });
      setUserToken(token);
      console.log(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Header
        userToken={userToken}
        setUser={setUser}
        valueRange={valueRange}
        setValueRange={setValueRange}
        statusSwitch={statusSwitch}
        setStatusSwitch={setStatusSwitch}
        valueInputSearch={valueInputSearch}
        setValueInputSearch={setValueInputSearch}
      />
      <Switch>
        <Route path="/signup">
          <SignupPage setUser={setUser} />
        </Route>
        <Route path="/login">
          <LoginPage setUser={setUser} />
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/">
          <Home
            valueRange={valueRange}
            statusSwitch={statusSwitch}
            valueInputSearch={valueInputSearch}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
