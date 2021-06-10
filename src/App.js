import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layouts/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <Route exact path='/' component={Welcome}/>
      <Route exact path='/jobs' component={Dashboard}/>
      <Route exact path='/jobs/jobAdvertId' component={Dashboard}/> */}
      <Dashboard/>
    </div>
  );
}

export default App;
