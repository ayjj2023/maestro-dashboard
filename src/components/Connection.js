import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React, {useState, useEffect} from 'react'


function Connection() { 
    const [telescope, setTelescope] = useState("nothing")
    const [maestro, setMaestro] = useState("maestro")


    useEffect(() =>{
      fetch('http://127.0.0.1:5003/lst', {
          headers: {"Content-Type": "application/json"},
          method: "POST",
          credentials: 'same-origin',
          mode: "cors"
      }).then(function(response) {
          return response.json();
      }).then(res => setTelescope(res["Telescope"]))  
  }, [])

    return (
        <Box sx = {{borderRadius: 1, display: 'flex'}}>
            <Typography fontWeight = "bold" variant = "h6">Telescope:&nbsp;</Typography>
            <Typography variant = "h6">{telescope}</Typography>
        </Box>
    )
}

export default Connection;

