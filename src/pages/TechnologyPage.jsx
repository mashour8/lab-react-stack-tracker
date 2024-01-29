import { useParams, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function TechnologyPage(props) {
  const location = useLocation();
  const { from } = location.state;

  const [searchParams, setSearchParams] = useSearchParams();
  const slug = searchParams.get("techId");
  console.log("Getting : oldUrl : ", slug);

  // const { slug } = useParams();

  let findTech = props.techs.find((tech) => {
    return tech.slug === slug;
  });
  return (
    <div>
      <h1>Technology Details</h1>
      <div className="tech-detials">
        <img
          className="tech-detials-img"
          src={findTech.image}
          width={"20%"}
          height={"20%"}
        ></img>
        <div>
          <h1>{findTech.name}</h1>
          <p>About</p>
          <p>{findTech.description}</p>
        </div>
      </div>
      <a href={`/company?companyId=${from}`}>
        <button>back</button>
      </a>
    </div>
  );
}

export default TechnologyPage;
