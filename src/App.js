import './App.css';
import Navbar from './components/Navbar';
import Cast from './components/Cast';
import GridItems from './components/GridItems';
import Footer from './components/Footer';
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
function App() {
  const [city, setCity] = React.useState("London, UK");
  function changeCity(city) {
    setCity(city)
  }
  return (
    <div className="App">
        <Navbar />
        <Container>
          <Box sx={{display: 'flex'}}>
             <Cast city={city}/>
            <GridItems 
            city={city}
            setCity={(c) => changeCity(c)}
            />
          </Box>
        </Container>
        <Footer />
    </div>
  );
}

export default App;
