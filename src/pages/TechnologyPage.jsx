import { useParams } from "react-router-dom";

function TechnologyPage(props) {
  const { slug } = useParams();
  let findTech = props.techs.find((tech) => {
    return tech.slug === slug;
  });
  console.log("findTech", findTech);
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
    </div>
  );
}

export default TechnologyPage;
