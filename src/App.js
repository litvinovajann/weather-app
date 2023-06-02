import './App.css';
import Navbar from './components/Navbar';
import Cast from './components/Cast';
import GridItems from './components/GridItems';
import Footer from './components/Footer';
import React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
function App() {
  return (
    <div className="App">
        <Navbar />
        <Container>
          <Box sx={{display: 'flex'}}>
             <Cast />
            <GridItems />
          </Box>
        </Container>
        <Footer />
    </div>
  );
}

export default App;
