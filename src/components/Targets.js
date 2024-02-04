import Papa from 'papaparse';
import candidates from './assets/temp_addcandidates.csv'
import {useState} from 'react';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


function Targets() { 
    //const [candidatesData, setCandidatesData] = useState([]);
    /*
    Papa.parse(candidates, {
        header: true,
        complete: parsedCsv => {setCandidatesData(parsedCsv.data)}
    })
    */

    console.log(candidates)
    const parsed = Papa.parse(candidates, {
        header: true
    })
    console.log(parsed)
    const data = parsed.data
    console.log(data)
    console.log("hello")

    return (

        <div>
            hello
        </div>
    )
  }

export default Targets;