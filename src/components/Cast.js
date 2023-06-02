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

export default function Cast() { 
    const [currentCells, setCurrentCells] = useState([]); 
    const city = "London,uk";
    return (
      <TableContainer  sx={{  minWidth: 400, maxWidth:800, my:5}} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow> 
             <TableCell align="left" colSpan={5}>
                   Weather in {city}
              </TableCell>
           </TableRow> 
          <TableRow>
          {Object.keys(currentCells).map((key) => ( 
               <TableCell align="center">{key}</TableCell>
            )
          )}
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >   {Object.keys(currentCells).map((key) => ( 
               <TableCell align="center">{currentCells[key]}</TableCell>
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