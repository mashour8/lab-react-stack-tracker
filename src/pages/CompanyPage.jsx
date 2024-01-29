import { Link, useParams, useSearchParams } from "react-router-dom";
import { Image, List } from "antd";

function CompanyPage(props) {
  // const { companySlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const companySlug = searchParams.get("companyId");
  console.log("slug", companySlug);

  let findCompany = props.companies.find((company) => {
    return company.id === companySlug;
  });

  console.log("findCompany", findCompany);
  return (
    <div>
      <h2>Company Profile</h2>
      <div className="company-detials">
        <img
          className="company-detials-img"
          src={findCompany.logo}
          width={"200px"}
        ></img>
        <div className="company-detials-text">
          <h1>{findCompany.name}</h1>
          <h3>About</h3>
          <p>{findCompany.description}</p>
        </div>
      </div>
      <div className="techs">
        {findCompany.techStack.map((tech) => {
          return (
            <div key={tech.slug}>
              <Image.PreviewGroup>
                <Link
                  to={`/tech?techId=${tech.slug}`}
                  state={{ from: companySlug }}
                >
                  {/* <Link to={`/tech?techId=${tech.slug}`}> */}
                  <img className="tech-img" src={tech.image}></img>
                  <p> {tech.name}</p>
                </Link>
              </Image.PreviewGroup>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyPage;
