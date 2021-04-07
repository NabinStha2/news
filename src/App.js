import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BusinessScreen from "./Screens/BusinessScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import HomeScreen from "./Screens/HomeScreen";
import LogInScreen from "./Screens/LogInScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import SportsScreen from "./Screens/SportsScreen";
import EntertainmentScreen from "./Screens/EntertainmentScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/business" component={BusinessScreen} exact />
      <Route path="/sports" component={SportsScreen} exact />
      <Route path="/login" component={LogInScreen} exact />
      <Route path="/register" component={RegisterScreen} exact />
      <Route path="/details/:id" component={DetailsScreen} exact />
      <Route path="/search/:keyword" component={HomeScreen} exact />
      <Route path="/entertainment" component={EntertainmentScreen} exact />
      <Footer />
    </Router>
  );
};

export default App;
