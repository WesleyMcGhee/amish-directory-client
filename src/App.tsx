// Global imports
import { Switch, Route, Router } from "wouter";

// Pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Home} path="/" />
          <Route component={Login} path="/login" />
          <Route component={Signup} path="/signup" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
