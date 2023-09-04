import './Style/style.css';
import './Style/fonts.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './View/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  return (
      
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Main/>} />
            {/* <Route path="/home" element={<Home/>} /> */}
          </Routes>
        </Router>
      </div>
  );
}

export default App;