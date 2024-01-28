import { Link, useParams } from "react-router-dom";

function CompanyPage(props) {
  const { companySlug } = useParams();
  console.log("slug", companySlug);

  let findCompany = props.companies.find((company) => {
    return company.id === companySlug;
  });
  console.log("findCompany", findCompany);
  return (
    <div>
      <h4>Company Profile</h4>
      <div className="company-detials">
        <img
          className="company-detials-img"
          src={findCompany.logo}
          width={"20%"}
          height={"20%"}
        ></img>
        <div>
          <h1>{findCompany.name}</h1>
          <p>About</p>
          <p>{findCompany.description}</p>
        </div>
      </div>
      <div className="techs">
        {findCompany.techStack.map((tech) => {
          return (
            <div key={tech.slug} className="tech-list">
              <Link to={`/tech/${tech.slug}`}>
                <img src={tech.image} height={"70px"}></img>
                <p> {tech.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyPage;
