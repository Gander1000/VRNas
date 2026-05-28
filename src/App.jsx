import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeDate from "./HomeDate";
import Heder from "./Components/Heder/Heder";
import Adout_us_Date from "./Adout_us_Date";
import Foter from "./Components/Foter/Foter";
import Service_Date from "./Service_Date";
import Page_Date from "./Page_Date";
import Blog from "./Components/Blog/Blog";
import Our_team_Date from "./Our_team_Date";
import Contact_us_Date from "./Contact_us_Date";
import FAQ_Date from "./FAQ_Date";
import ScrollToTop from "./ScrollToTop";
import Terms_and_Conditions_Date from "./Terms_and_Conditions_Date";
import Privacy_Policy_Date from "./Privacy_Policy_Date";

function App() {
  return (
    <>
      <ScrollToTop />

      <Heder />
      <Routes>
        <Route path="/" element={<HomeDate />} />
        <Route path="/Adout_us" element={<Adout_us_Date />} />
        <Route path="/Service" element={<Service_Date />} />
        <Route path="/Page" element={<Page_Date />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Our_team_Date" element={<Our_team_Date />} />
        <Route path="/Contact_us" element={<Contact_us_Date />} />
        <Route path="/FAQ" element={<FAQ_Date />} />
        <Route
          path="/Terms_and_Conditions"
          element={<Terms_and_Conditions_Date />}
        />
        <Route path="/Privacy_Policy" element={<Privacy_Policy_Date />} />
      </Routes>
      <Foter />
    </>
  );
}

export default App;
