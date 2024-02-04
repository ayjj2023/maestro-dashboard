import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


function StatusBox(props) { 
    return (
        <Box>
            <Typography fontWeight = "bold" variant = "h4" fontSize = "1.5rem">Status:&nbsp;</Typography>
            <Typography variant = "h4" fontSize = "1.5rem">{props.status}</Typography>
        </Box>
    )
  }

export default StatusBox;