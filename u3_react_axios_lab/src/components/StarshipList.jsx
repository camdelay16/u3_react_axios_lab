const StarshipList = (props) => {
  const { starships } = props;

  return (
    <div>
      {starships.map((starship, index) => (
        <div key={index}>
          <h3>{starship.name}</h3>
          <p>Crew Count: {starship.crew}</p>
          <p>Class: {starship.starship_class}</p>
          <p>Model: {starship.model}</p>
        </div>
      ))}
    </div>
  );
};

export default StarshipList;
