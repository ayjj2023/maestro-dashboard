import './App.css';

import Notice from './components/Notice';
import Schedule from './components/Schedule';
import Targets from './components/Targets';
import Clock from './components/Clock';
import StatusBox from './components/StatusBox';
import SiderealTime from './components/SiderealTime'
import Connection from './components/Connection'

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



function LabeledBox({ label, height=90, children }) {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: `${height}px`, m: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="caption" fontFamily={"'Roboto Condensed', sans-serif "} fontSize={"0.9rem"} lineHeight={1.5} letterSpacing={"0.00938em"} sx={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', backgroundColor: '#fff', px: 0.01, textAlign: 'center',  whiteSpace: 'nowrap' }}>
        {label}
      </Typography>
      <Card variant="outlined" sx={{ width: '100%', height: '100%', p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {children}
      </Card>
    </Box>
  )
}

function App() {
  return (
    <div className="App">
     <Stack direction = "column" spacing = {2} sx = {{paddingX: 2, paddingY: 5}}>
      <Grid container spacing = {2}>
        <Grid item xs = {12}>
        <LabeledBox label="Notice">
         <Notice message = "hello this is a placeholder message"/>
        </LabeledBox>
        </Grid>
        <Grid item xs = {4}>
          <LabeledBox label = "Status" height = {100}>
             <StatusBox status = "Observing" />
          </LabeledBox>
        </Grid>
        <Grid item xs = {4}>
          <LabeledBox label = "Sensor Status" height = {100}>
             Nothing here yet.
          </LabeledBox>
        </Grid>
        <Grid item xs = {4}>
          <LabeledBox label = "Weather" height = {100}>
             Nothing here yet.
          </LabeledBox>
        </Grid>
        <Grid item xs = {4}>
          <LabeledBox label = "Schedule" height = {600}>
            <Schedule />
          </LabeledBox>
        </Grid>
        <Grid item xs = {8}>
          <LabeledBox label = "Targets" height = {400} width = {1000}> 
             <Targets />
           </LabeledBox>
           <LabeledBox label = "Clock" height = {100}>
             <Clock />
           </LabeledBox>            
        </Grid>
        <Grid item xs = {4}>
           <LabeledBox label = "Connections">
             <Connection />
           </LabeledBox>
        </Grid>
        <Grid item xs = {4}>
          <LabeledBox label = "Log" height = {400}>
            Nothing here yet.
          </LabeledBox>
        </Grid>
      </Grid>
     </Stack>
      
    </div>
  );
}

//   return (
//     <div className="App">
//      <Stack direction = "column" spacing = {2} sx = {{paddingX: 2, paddingY: 10}}>
//       <LabeledBox label="Notice">
//         <Notice message = "hello this is a placeholder message"/>
//       </LabeledBox>
//       <Stack direction="row" spacing={2} sx = {{paddingX: 2, paddingY: 2}}>
//         <Stack direction="column" spacing={2} sx = {{width: 400, paddingX: 2, paddingY: 2}}>
//           <LabeledBox label = "Status" height = {100}>
//             <StatusBox status = "Observing" />
//           </LabeledBox>
//           <LabeledBox label = "Schedule" height = {600}>
//             <Schedule />
//           </LabeledBox>
//           <LabeledBox label = "Clock">
//             <Clock />
//           </LabeledBox>
//         </Stack>
//         <Stack direction="column" spacing={2} sx = {{width: 400, paddingX: 2, paddingY: 2}}>
//           <LabeledBox label = "Targets" height = {400} width = {1000}> 
//             <Targets />
//           </LabeledBox>
//           <LabeledBox label = "Sederial Time">
//             <SiderealTime />
//           </LabeledBox>
//           <LabeledBox label = "Connections">
//             <Connection />
//           </LabeledBox>
//         </Stack>
//       </Stack>
//      </Stack>
      
//     </div>
//   );
// }

export default App;
