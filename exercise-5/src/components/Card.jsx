function Card({ item }) {
  return (
    <li className="card-item">
      <button>
        <img src={item.image.src} alt={item.image.alt} />
        <h3>{item.title}</h3>
        <p className="class">{item.class}</p>
        <p className="hobby">{item.hobby}</p>
        <div className="extra-info">
          <p><span>Real Name:</span> {item.name}</p>
          <p><span>Gender:</span> {item.gender}</p>
          <p><span>Address:</span> {item.address}</p>
        </div>
      </button>
    </li>
  );
}

export default Card;