import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'



const rows = [
  {
    "name": 'adarsh',
    "id": 1,
    "age": 40,
    "exp": 34,
    "sal": 444,
  },
  {
    "name": 'adarsh22',
    "id": 2,
    "age": 22,
    "exp": 20,
    "sal": 42,
  },
  {
    "name": 'adam25',
    "id": 3,
    "age": 50,
    "exp": 1,
    "sal": 5,
  },
  {
    "name": 'alex45',
    "id": 4,
    "age": 4,
    "exp": 4,
    "sal":23,
  },
  {
    "name": 'adarsh15',
    "id": 5,
    "age": 15,
    "exp": 12,
    "sal": 15,
  },
  {
    "name": 'adam21',
    "id": 6,
    "age": 21,
    "exp": 34,
    "sal": 12,
  },
  {
    "name": 'alex32',
    "id": 7,
    "age": 48,
    "exp": 3,
    "sal": 44,
  },
  {
    "name": 'alex232',
    "id": 8,
    "age": 12,
    "exp": 4,
    "sal": 4,
  },

];



function BasicTable() {

  const [inputText, setInputText]=useState("");
  const [data, setData] = useState(rows);

  //Comparer Function    
  const GetSortOrder = (prop) => {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    }
  }

  const filterAge = () => {
    let sort_data = data.sort(GetSortOrder("age"))
    setData([...sort_data]);
  }

  const filterExperience = () => {
    let sort_data = data.sort(GetSortOrder("exp"))
    setData([...sort_data]);
  }

  const filterSalary = () => {
    let sort_data = data.sort(GetSortOrder("sal"))
    setData([...sort_data]);
  }

  const inputHandler = (e) =>{
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  const filteredData = ()=>{
    
     let sort_data = data.filter((el)=>el.name===inputText)
      setData(sort_data);
    }
  

  return (
    <div className='user-table'>


      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  filter by category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#/" onClick={filterAge}>age</a></li>
                  <li><a className="dropdown-item" href="#/" onClick={filterExperience}>experience</a></li>
                  <li><a className="dropdown-item" href="#/" onClick={filterSalary}>salary</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input onChange={inputHandler}  className="form-control me-2" type="search" placeholder="Please type the full name of employee" aria-label="Search" />
              <button onClick={filteredData} className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">age</TableCell>
              <TableCell align="right">Experience&nbsp;(Year)</TableCell>
              <TableCell align="right">Salary&nbsp;(lac)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.exp}</TableCell>
                <TableCell align="right">{row.sal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BasicTable