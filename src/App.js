import logo from './logo.svg';
import Form from './components/Form';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NewTab from './components/NewTab';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Form" element={<Form/>}/>
          <Route path="/NewTab" element={<NewTab/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
