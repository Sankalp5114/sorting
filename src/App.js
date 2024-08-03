import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
//import Login from './routes/Login.js';
//import Signup from './routes/Signup.js';
import Home from './routes/Home.js';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
