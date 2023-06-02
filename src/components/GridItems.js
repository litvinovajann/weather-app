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
    }));
    
    return (
          <Container fixed sx={{width:3/10}}>
          <Box sx={{marginTop: '40px'}}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <Item>London</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>New York</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>San Francisco</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>Paris</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>Moscow</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>Berlin</Item>
              </Grid>
            </Grid>
         </Box>
          </Container>
      );
}