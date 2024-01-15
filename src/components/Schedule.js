import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import schedule from "./assets/schedulesample.png"

function Schedule() { 
    return (
        <Box alignItems = "left">
            <Typography variant = "h6">Below is testing displaying an image:</Typography>
            <img src = {schedule} alt = "Schedule" width={200} height={500}/>
        </Box>
    )
  }

export default Schedule;