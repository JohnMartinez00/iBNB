import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import Contact from "./Pages/Home/Contact/Contact";
import FAQ from "./Pages/Home/FAQ/FAQ";
import Roadmap from "./Pages/Home/Roadmap/Roadmap";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import OurTeam from "./Pages/Home/OurTeam/OurTeam";
import Navbar from "./Pages/Navbar/Navbar";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="min-h-screen App background_img">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/Roadmap">
              <Roadmap></Roadmap>
            </Route>
            <Route exact path="/FAQ">
              <FAQ></FAQ>
            </Route>
            <Route exact path="/Contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/Team">
              <OurTeam></OurTeam>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
