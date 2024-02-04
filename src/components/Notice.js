import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Notice(props) { 
    return (
        <Box sx = {{borderRadius: 1, display: 'flex', alignItems:"left"}}>
            <Typography fontWeight = "bold" variant = "h6">Notice:&nbsp;</Typography>
            <Typography variant = "h6">{props.message}</Typography>
        </Box>
    )
  }

export default Notice;