import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layouts/Dashboard';
import Welcome from './layouts/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
