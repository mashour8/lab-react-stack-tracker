import { Link } from "react-router-dom";
import CompanyPage from "./CompanyPage";

function HomePage(props) {
  return (
    <div className="company">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      {props.companies.map((company) => {
        return (
          <div key={company.id}>
            <Link to={`/company/${company.id}`}>
              <h4>{company.name}</h4>
              <img src={company.logo} width={"100px"}></img>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
