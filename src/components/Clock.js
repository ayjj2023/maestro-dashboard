import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import SiderealTime from './SiderealTime';

export default function Clock(props) { 
    const date = new Date() 
    return (
        <Box sx = {{borderRadius: 1, display: 'flex'}}>
            <Typography fontWeight = "bold" variant = "h6">Pacific Time:&nbsp;</Typography>
            <Typography variant = "h6">{date.toLocaleTimeString()}</Typography>
            <SiderealTime />
        </Box>
    )
  }

