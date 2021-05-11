import "./App.css";

// Tools
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cookies from "js-cookie";

// Containers
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Header from "./containers/Header";
import SignupPage from "./containers/Signup";
import LoginPage from "./containers/Login";
import PublishPage from "./containers/Publish";
import Payment from "./containers/Payment";

// Assets
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSpinner, faHeart, faSearch);

// App
function App() {
  const [valueRange, setValueRange] = useState([50, 130]);
  const [statusSwitch, setStatusSwitch] = useState(true);
  const [valueInputSearch, setValueInputSearch] = useState("");
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [userId, setUserId] = useState(Cookies.get("userId") || null);
  // const [userData, setUserData] = useState();

  const setUser = (token, userId) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 1 });
      Cookies.set("userId", userId, { expires: 1 });
      setUserToken(token);
      setUserId(userId);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
      setUserId(null);
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
          <Offer userToken={userToken} />
        </Route>
        <Route path="/publish">
          {userToken ? (
            <PublishPage userToken={userToken} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/payment/:id">
          {userToken ? <Payment userId={userId} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          <Home
            valueRange={valueRange}
            statusSwitch={statusSwitch}
            valueInputSearch={valueInputSearch}
            userToken={userToken}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
