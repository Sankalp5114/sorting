import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
//import Login from './routes/Login.js';
import Visualize from './routes/Visualize.js';
import Home from './routes/Home.js';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/visualize" element={<Visualize />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
