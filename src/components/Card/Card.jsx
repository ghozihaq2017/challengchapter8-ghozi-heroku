function Card(props) {
  return (
    <div key={props.id}>
      <img src={props.image} alt="" srcset="" />
      <h1>{props.name}</h1>
      <h2>{props.category}</h2>
    </div>
  );
}

export default Card;
