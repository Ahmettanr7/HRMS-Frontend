import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layouts/Dashboard';
import { Route } from 'react-router';
import AdminDashboard from './layouts/AdminDashboard';
import EmployerDashboard from './layouts/EmployerDashboard';

function App() {
  return (
    <div className="App">
      <Dashboard/>
      <Route exact path='/admin' component={AdminDashboard}/>
            <Route exact path='/admin/jobadvertlist' component={AdminDashboard}/>
            <Route exact path='/admin/employeelist' component={AdminDashboard}/>
            <Route exact path='/admin/employerlist' component={AdminDashboard}/>
            <Route exact path='/admin/systememployeelist' component={AdminDashboard}/>
            <Route exact path='/employer' component={EmployerDashboard}/>
            <Route exact path='/employer/jobadvertlist' component={EmployerDashboard}/>
    </div>
  );
}

export default App;
