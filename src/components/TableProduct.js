import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchTable from '../components/SearchTable';
import '../css/components/TableProduct.css';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
// import PaginationUI from './PaginationUI';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
    fontSized: {
        fontSize: 14,
    }

  });

const TableProduct = () => {
    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [product,setProduct] = useState([])
    const [search,setSearch] = useState([])
    const getProductData = async () => {
        try{
            const data = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
            console.log(data.data)
            setProduct(data.data)
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect (() => {
        getProductData()
    },[])

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, product.length - page * rowsPerPage);


    const searching = (e) => {
        setSearch(e.target.value)
    }
    return ( 
        <div>
            <SearchTable searching={searching}/>

            <div className="wthTab">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell className={classes.fontSized}>Product Name</StyledTableCell>
                        <StyledTableCell className={classes.fontSized} align="right">Product Price</StyledTableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {product.filter(item=>{
                            if(search === ""){
                                return item
                            } else if (item.name.toString().toLowerCase().includes(search.toString().toLowerCase())){
                                return item
                            }
                        })
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((item,i)=>{
                            return (
                                    <StyledTableRow key={i}>
                                        <StyledTableCell component="th" scope="row">
                                        {item.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{item.price}</StyledTableCell>
                                    
                                    </StyledTableRow>
                                )         
                        })}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

                <TablePagination
                    rowsPerPageOptions={[5,10,20]}
                    component="div"
                    count={product.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
            </div>
            {/* <PaginationUI/> */}
        </div>
     );
}
 
export default TableProduct ;
