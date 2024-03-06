import Papa from 'papaparse';
import candidates from './assets/temp_addcandidates.csv'
import {useState, useEffect} from 'react';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Targets() { 
    //const [candidatesData, setCandidatesData] = useState([]);
    /*
    Papa.parse(candidates, {
        header: true,
        complete: parsedCsv => {setCandidatesData(parsedCsv.data)}
    })
    console.log(candidates)
    const parsed = Papa.parse(candidates, {
        header: true
    })
    console.log(parsed)
    const data = parsed.data
    console.log(data)
    console.log("hello")
    */

    const [targets, setTargets] = useState([])
    var rows = []

    useEffect(() =>{
        fetch('http://127.0.0.1:5005/lst', {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            credentials: 'same-origin',
            mode: "cors"
        }).then(function(response) {
            return response.json();
        }).then(res => setTargets(res["result"]))  
    }, [])

    function createData(name, type, id, magnitude, updated) {
        return { name, type, id, magnitude, updated };
    }

    //for loop this
    
    console.log(targets);
    if(targets.length != 0)
    {
        rows = [
            createData(targets[0]["CandidateName"], targets[0]["CandidateType"],  targets[0]["ID"],  targets[0]["Magnitude"],  targets[0]["Updated"]),
            createData(targets[1]["CandidateName"], targets[1]["CandidateType"],  targets[1]["ID"],  targets[1]["Magnitude"],  targets[1]["Updated"]),
            createData(targets[2]["CandidateName"], targets[2]["CandidateType"],  targets[2]["ID"],  targets[2]["Magnitude"],  targets[2]["Updated"]),
            createData(targets[3]["CandidateName"], targets[3]["CandidateType"],  targets[3]["ID"],  targets[3]["Magnitude"],  targets[3]["Updated"]),
            createData(targets[4]["CandidateName"], targets[4]["CandidateType"],  targets[4]["ID"],  targets[4]["Magnitude"],  targets[4]["Updated"]),
          ];
    }

      
     //const rows = targets

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Magnitude</TableCell>
                <TableCell align="right">Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.type}</TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.magnitude}</TableCell>
                  <TableCell align="right">{row.updated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
  }

export default Targets;

