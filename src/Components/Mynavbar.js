import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import {Navbar,Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import App from '../App';
export default function Mynavbar({filterBySearch}) {
  const [mySearchValue, setMySearchValue] = useState('')

  // searching
  const onSearch = (e) =>{
    filterBySearch(mySearchValue)
    console.log(mySearchValue)
    setMySearchValue('')
    
  }


  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    
    <Navbar expand="lg" className="bg-success bg-gradient fixed-top">
      <Container>
      <Navbar.Brand href="/" className='text-white'>Movies</Navbar.Brand>
        <Form className="d-flex w-75">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
              onChange={
                (e)=>{
                  setMySearchValue(e.target.value)
                }
              }
              onSubmit={handleSubmit}
              value={mySearchValue}
            />
            <Button 
            variant="outline-success"
            className='text-white border-white'
            onClick={()=>{
              onSearch(mySearchValue)
            }}
            >Search</Button>
          </Form>
      </Container>
    </Navbar>
  );
}

