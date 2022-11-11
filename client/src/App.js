import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/Header';
import Home from "./components/home/Home"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"

function App() {
  return (
    <>
    <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
