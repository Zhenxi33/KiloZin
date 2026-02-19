function Card({ member }) {
  return (
    <div className="card">
      <img 
        src={member.image.src} 
        alt={member.image.alt} 
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">{member.title}</h3>
        <span className="card-class">{member.class}</span>
        <p className="card-hobby">{member.hobby}</p>
        
        <div className="card-details">
          <div className="card-detail">
            <span>Real name</span>
            <span>{member.name}</span>
          </div>
          <div className="card-detail">
            <span>Age</span>
            <span>{member.age}</span>
          </div>
          <div className="card-detail">
            <span>From</span>
            <span>{member.address}</span>
          </div>
          <div className="card-detail">
            <span>Food</span>
            <span>{member.favoriteFood}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;