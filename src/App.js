import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/pages/Nav";
import About from "./components/pages/About";
import Interests from './components/pages/Interests';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={About} />
        <Route exact path="/interests" component={Interests} />
        <Route path="/resume" component={Contact} />
        <Route path="/Portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}
export default App;