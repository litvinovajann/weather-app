import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
export default function GridItems() {

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
      {id:2, name: "Moscow", searchName: "Moscow,Russia"},
      {id:3, name: "San Francisco", searchName: "London,uk"},
      {id:4, name: "New York", searchName: "London,uk"},
      {id:5, name: "Paris", searchName: "London,uk"},
      {id:6, name: "Berlin", searchName: "London,uk"},
      {id:7, name: "Munich", searchName: "London,uk"},
      {id:8, name: "Barcelona", searchName: "London,uk"},
      {id:9, name: "Saint Petersburg", searchName: "London,uk"},
      {id:10, name: "Mexico", searchName: "London,uk"},
      {id:10, name: "Kabul", searchName: "London,uk"},
      {id:10, name: "Beijing", searchName: "London,uk"},
    ]
    const handleClick = function(event) {
      console.log(event.target.getAttribute('searchName'))
    }
    return (
          <Container fixed sx={{width:3/10}}>
          <Box sx={{marginTop: '40px', marginBottom:"40px"}}>
              <Grid 
              container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {gridItems.map((element)=> (
                  <Grid item xs={12} md={12} lg={6}>
                  <Item
                    name={element.name}
                    searchName={element.searchName}
                    onClick={handleClick}
                  > {element.name}</Item>
                  </Grid>
                ))}
                   
            </Grid>
         </Box>
          </Container>
      );
}