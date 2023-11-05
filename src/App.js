import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mynavbar from './Components/Mynavbar';
import Moviecard from './Components/Moviecard';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Pagination from './Components/Pagination';
function App() {
// movie state
  const [movie,setMovies]=useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  // fetch data
  const fetchMovies = async() =>{
   await fetch("http://localhost:8000/movies")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      console.log(data)
      setMovies(data)
    })
  }

  // fetching
  useEffect(()=>{
    fetchMovies();
  },[

  ])

  const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
const currentRecords = movie.slice(indexOfFirstRecord, indexOfLastRecord);
const nPages = Math.ceil(movie.length / recordsPerPage)


  // filter by search
  const filterBySearch = (word)=>{
    if(word !== ""){
      const newArr = movie.filter((m)=>m.Title === word )
      setMovies(newArr)
    }
  }

  return (
    <div className="App">
      <Mynavbar filterBySearch={filterBySearch}/>
      <Container>
      
      <Moviecard movie={currentRecords}/>
      <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />

      </Container>




    </div>
  );
}

export default App;
