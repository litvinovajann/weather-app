import {Box, Pagination} from "@mui/material"
import {useEffect, useState} from "react";
import service from "../services";
const pageSize = 5;

export default function CastPagination(cetCurrentCells) {
    
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize
  });

  useEffect(()=> {
    service.getData({from:pagination.from, to:pagination.to});
   }, [] ) 
  return (
    <>
    <Box 
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        sx={{margin:"20px 0px"}}    
    >
        <Pagination 
            color="primary"
            count={4}
        />
     </Box>
    </>
);
}