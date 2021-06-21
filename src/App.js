import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Dashboard from "./layouts/base/Dashboard";
import { Route } from "react-router";
import AdminDashboard from "./layouts/admin/AdminDashboard";
import EmployerDashboard from "./layouts/employer/EmployerDashboard";
import EmployeeDashboard from "./layouts/employee/EmployeeDashboard";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Route exact path="/admin" component={AdminDashboard} />
      <Route exact path="/admin/jobadvertlist" component={AdminDashboard} />
      <Route exact path="/admin/employeelist" component={AdminDashboard} />
      <Route exact path="/admin/employerlist" component={AdminDashboard} />
      <Route
        exact
        path="/admin/systememployeelist"
        component={AdminDashboard}
      />
      <Route exact path="/employer" component={EmployerDashboard} />
      <Route
        exact
        path="/employer/jobadvertlist"
        component={EmployerDashboard}
      />
      <Route exact path="/employee" component={EmployeeDashboard} />
      <Route exact path="/employee/cv" component={EmployeeDashboard} />
    </div>
  );
}

export default App;
