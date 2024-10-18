import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
//import Login from './routes/Login.js';
import Visualize from './routes/Visualize.js';
import Home from './routes/Home.js';
import User from './routes/User.js';
import Sorting from './routes/Sorting.js';
import Searching from './routes/Searching.js';
import Svisualize from './routes/Svisualize.js';
import Suser from './routes/Suser.js';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/sorting-visualize" element={<Visualize />} />
          <Route path="/user" element={<User />} />
          <Route path="/Suser" element={<Suser />} />

          <Route path="/sorting" element={<Sorting />} />
          <Route path="/searching" element={<Searching />} />
          <Route path="/searching-visualize" element={<Svisualize />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
