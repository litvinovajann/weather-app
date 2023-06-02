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

//   const [currentPage, setPage] = React.useState(1);
//   const [cellsPerPage] = React.useState(5);
//   const [pageItem, SetPageItem] = useState({
//     start: 0,
//     end: cellsPerPage
// })

// const onPageChangeEvent = (start, end) => {
//     SetPageItem({
//         start: start,
//         end: end
//     })
// }
//   const amountOfPages = function(obj) {
//     return Math.floor(Object.keys(obj).length / cellsPerPage);
//   }

 

//   function createConsecutiveArray(length) {
//     const arr = [];
  
//     for (let i = 1; i <= length; i++) {
//       arr.push(i);
//     }
  
//     return arr;
//   }
//   const buttons = createConsecutiveArray(amountOfPages(props.data)); 

//   //get current table cells
//   const indexOfLastCell = currentPage * cellsPerPage;
//   const indexOfFirstCell = indexOfLastCell  - cellsPerPage;


//   function extractElementsInRange(obj, start, end) {
//     const keys = Object.keys(obj);
//     const extractedElements = {};
  
//     for (let i = start; i < end; i++) {
//       const key = keys[i];
//       extractedElements[key] = obj[key];
//     }
  
//     return extractedElements;
//   }
//   const currentCells = extractElementsInRange(props.data, indexOfFirstCell, indexOfLastCell);
//   const setCurrentPage = (number) => {
//     setPage(number);
//     console.log(currentPage)
//   }
    const [currentCells, setCurrentCells] = useState([]); 
    return (
      <TableContainer  sx={{  minWidth: 400, maxWidth:800, my:5}} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow> 
             <TableCell align="left" colSpan={5}>
                   //
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
                  setCurrentCells={(cells) => setCurrentCells(cells)}
                  />
             </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer> 
          )
    }