import React, { useState } from "react";
import { Card, Row } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
export default function Moviecard({ movie }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Row className="d-flex flex-direction-row myContainer">
      {movie.map((m, index) => (
        <Link to={`/movie/${m.id}`} className="myLink">
          {" "}
          <Card
            key={index}
            className="myCard"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Card.Img variant="top" className="img" src={m.Poster} />
            {hoveredIndex === index && (
              <div className="cardDetails">
                <p>Name: {m.Title}</p>
                <p>Made at: {m.Year}</p>
                Time: {m.Runtime}
              </div>
            )}
          </Card>
        </Link>
      ))}
    </Row>
  );
}
