import { Link } from "react-router-dom";
import { Flex } from "antd";

function HomePage(props) {
  return (
    <div>
      <h1>
        StackTracker: Discover Tech Stacks <br></br>Used by Top Companies
      </h1>
      <div className="company">
        {props.companies.map((company) => {
          return (
            <Flex key={company.id} className="companies-container">
              <Link to={`/company?companyId=${company.id}`}>
                <h3 className="companies-h3">{company.name}</h3>
                <img
                  className="companies-img"
                  src={company.logo}
                  width={"100px"}
                ></img>
              </Link>
            </Flex>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
