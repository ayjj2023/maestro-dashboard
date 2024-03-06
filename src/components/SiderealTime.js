import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React, {useState, useEffect} from 'react'

function SiderealTime() { 
    const [time, setTime] = useState("a")

    useEffect(() =>{
        fetch('http://127.0.0.1:5001/lst', {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            credentials: 'same-origin',
            mode: "cors",
            body: JSON.stringify({"longitude":-117})
        }).then(function(response) {
            return response.json();
        }).then(res => setTime(res["time"]))  
    }, [])

    return (
        <Box sx = {{borderRadius: 1, display: 'flex'}}>
            <Typography fontWeight = "bold" variant = "h6">SiderealTime:&nbsp;</Typography>
            <Typography variant = "h6">{time}</Typography>
        </Box>
    )
  }

  export default SiderealTime;
