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

  const [data,setAllData] = React.useState({});

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b4d2fcaa3980ad9354201f7a7782a3dd")
    .then(res => res.json())
    .then(data =>  setWeatherData(data))
   }, []);

  function setWeatherData(data){
      const stack = [data];
      const newObj = {};
      while (stack?.length > 0) {
        const currentObj = stack.pop();
        Object.keys(currentObj).forEach(key => {
           if (typeof currentObj[key] !== "object" &&
               key!== "id" &&
               key !== "cod" &&
               key !== "type" && 
               key !== "base" &&
               key !== "icon" &&
               key !== "dt"   
             ) {
              newObj[key] = currentObj[key]
              }
          if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
            stack.push(currentObj[key]);
          }
        });
      }
      setAllData(newObj);
  } 
  
  return (
    <div className="App">
        <Navbar />
        <Container>
          <Box sx={{display: 'flex'}}>
             <Cast data={data}/>
            <GridItems />
          </Box>
        </Container>
        <Footer />
    </div>
  );
}

export default App;
