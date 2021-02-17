import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/useAuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Chat from "./components/Chat";
import Login from "./components/Login";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Chat} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
