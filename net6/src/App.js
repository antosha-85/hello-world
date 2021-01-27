import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import ProjectDetails from "./components/projects/ProjectDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Dashboard} /> */}
          <Route exact path="/" render={() => <Dashboard />} />
          <Route path="/project/:id" component={ProjectDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
