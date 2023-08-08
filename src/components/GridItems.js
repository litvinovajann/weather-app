import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

export default function GridItems({city,setCity}) {
    
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      cursor:"pointer"
    }));
    const gridItems = [
      {id:1, name: "London", searchName: "London,uk"},
      {id:2, name: "Moscow", searchName: "Moscow, Russia"},
      {id:3, name: "San Francisco", searchName: "San Francisco, CA, USA"},
      {id:4, name: "New York", searchName: "New York, NY, USA"},
      {id:5, name: "Paris", searchName: "Paris, FR"},
      {id:6, name: "Berlin", searchName: "Berlin, Germany"},
      {id:7, name: "Munich", searchName: "Munich, Germany"},
      {id:8, name: "Barcelona", searchName: "Barcelona, Spain"},
      {id:9, name: "Saint Petersburg", searchName: "Saint Petersburg, Russia"},
      {id:10, name: "Mexico", searchName: "Mexico, Mexico"},
      {id:11, name: "Kabul", searchName: "Kabul, Afganistan"},
      {id:12, name: "Beijing", searchName: "Beijing, China"},
    ]
    return (
          <Container >
          <Box sx={{marginTop: '40px', marginBottom:"40px"}}>
              <Grid 
              container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                {gridItems.map((element)=> (
                  <Grid item xs={6} md={6} lg={6} key={element.id}>
                  <Item
                    
                    name={element.name}
                    searchName={element.searchName}
                    onClick={(event) => setCity(event.target.getAttribute('searchName'))}
                  > {element.name}</Item>
                  </Grid>
                ))}
                   
            </Grid>
         </Box>
          </Container>
      );
}