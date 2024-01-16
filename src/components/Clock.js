import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Clock(props) { 
    const date = new Date() 
    return (
        <Box sx = {{display: 'flex'}}>
            <Typography fontWeight = "bold" variant = "h6">Pacific Time:&nbsp;</Typography>
            <Typography variant = "h6">{date.toLocaleTimeString()}</Typography>
        </Box>
    )
  }

