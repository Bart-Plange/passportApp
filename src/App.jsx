import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import StatusTracking from "./pages/StatusTracking";
import DualCitizens from "./pages/DualCitizens";
import NotFound from "./pages/NotFound";
import FirstTimeApplicant from "./pages/FirstTimeApplicant";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/firsttimeapplicant" element={<FirstTimeApplicant />} />
        <Route path="/dualcitizens" element={<DualCitizens />} />
        <Route path="/status-tracking" element={<StatusTracking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
