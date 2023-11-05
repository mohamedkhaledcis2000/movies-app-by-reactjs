import axios from "axios";
import React, { useState, useEffect } from "react";
import { Col, Row ,Card,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Mynavbar from "./Mynavbar";
export default function MovieDetails() {
  const [movie, setMovie] = useState([]);

  const params = useParams();

  // fetch data
  const fetchMovie = async () => {
    await axios
      .get(`http://localhost:8000/movies/${params.id}`)

      .then((res) => {
        console.log(res);
        setMovie(res.data);
      });
  };

  // fetching
  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
        <Mynavbar />
    <Card className="movie-details" style={{ width: '25rem' }}>
      <Card.Img className="CardImg" variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title> اسم الفيلم: {movie.Title}</Card.Title>
        <Card.Text>
        وقت الفيلم: {movie.Runtime}

        </Card.Text>
        <Card.Text>
        تاريخ انتاج الفيلم: {movie.Year}

        </Card.Text>
        <div className="btns">
        <Button variant="primary">مشاهده الفيلم</Button>
        <Link to="/"><Button variant="primary">عوده للرئيسيه</Button></Link>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
        
     

      

 
  
  
}
