import React from "react";
import {useState, useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter';
import CastPagination from "./CastPagination";

export default function Cast(props) { 
    const city = props.city;
    const [currentCells, setCurrentCells] = useState([]); 
    return (
      <TableContainer className="cast-table"  sx={{  minWidth: 400, maxWidth:800, my:5}} component={Paper}>
      <Table aria-label="simple table" className="weather-cast-area">
        <TableHead>
          <TableRow> 
             <TableCell align="left" colSpan={5}>
                   Weather in {city} (°F)
              </TableCell>
           </TableRow> 
          <TableRow>
          {Object.keys(currentCells).map((key) => ( 
               <TableCell key={key} align="center">{key}</TableCell>
            )
          )}
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >   {Object.keys(currentCells).map((key) => ( 
               <TableCell key={key} align="center">{currentCells[key]}</TableCell>
               )
            )}
        </TableRow>
        </TableBody>
        <TableFooter> 
          <TableRow>
             <TableCell align="right" colSpan={5}> 
                <CastPagination 
                  setCurrentCells={(c) => setCurrentCells(c)}
                  city={city}
                  />
             </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer> 
          )
    }