import { useState } from "react";
import "./App.css";
import companiesJSON from "./companies.json";
import techJSON from "./technologies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [companies, setCompanies] = useState(companiesJSON);
  const [techs, setTech] = useState(techJSON);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={<HomePage companies={companies}></HomePage>}
        ></Route>
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companies={companies}></CompanyPage>}
        ></Route>
        <Route
          path="/tech/:slug"
          element={<TechnologyPage techs={techs}></TechnologyPage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
