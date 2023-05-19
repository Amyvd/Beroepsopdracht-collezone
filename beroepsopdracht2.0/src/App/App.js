/*Home Page*/
import Homepage from "../Components/Homepage main/Main";
/*collectiepagina (dashboard) Page*/
import Collectiepage from "../Components/Collectiepagina/CollectiepaginaMain";
import Backlog from "../Components/Collectiepagina/Backlog/Backlog";
import Login from "../Components/Loginpage/LoginPage";
import Contactpage from "../Components/Contact/ContactPage";
import Logout from "../Components/Logout/Logout";
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/collectiepage" element={<Collectiepage/>}/>
        <Route path="/backlog" element={<Backlog/>}/>
        <Route path="/contactpage" element={<Contactpage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/loguit" element={<Logout/>}/>
      </Routes>
    </Router>
  );
}

export default App;
