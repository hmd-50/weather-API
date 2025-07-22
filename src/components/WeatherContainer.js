import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import CloudIcon from '@mui/icons-material/Cloud';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';


const today = new Date().toLocaleDateString('ar-EG', {
  day: 'numeric',
  month: 'long', // ------- يعطي اسم الشهر
  year: 'numeric',
});


function WeatherContainer() {
  return (
    <> 
    
    <Container maxWidth="sm">
    <Card sx={{ minWidth: 275 , maxHeight:"80vh" }}  
      style={{overflow:"scroll" ,backgroundColor:"#2137b1",color:"white" }} >
      <CardContent>
        <Grid container spacing={2}>


          <Grid sx={{ textAlign: "right" }} size={4}>
          <Typography
          variant="h3"
          component="div"
          style={{ fontWeight: "800" }}>
          الرياض
        </Typography>
          </Grid>
          <Grid sx={{ textAlign: "right" }} size={8}>
          <Typography
          variant="h6"
          component="div"
          style={{ fontWeight: "800",marginTop: "30px" ,marginRight:"-30px" }} >
          {today}
        </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: "white", borderWidth: 1}} />
        <Grid container spacing={2}>


<Grid sx={{ textAlign: "right" }} size={6}>
<Stack spacing={2}>
<Typography>
<Grid container spacing={2}>


<Grid sx={{ textAlign: "right", flexGrow: 1, fontSize: "5rem" }} size={6}>
  38
</Grid>
<Grid sx={{ textAlign: "right" }} size={6}>
<CloudySnowingIcon sx={{ fontSize: 70 ,marginRight:-5, marginTop:3}}/>
</Grid>
</Grid>
        </Typography>
        <Typography>
broken clouds    
    </Typography>      
        <Typography>
{`الصغرى:38 | الكبرى:38`}
        </Typography>   
           </Stack>
</Grid>
<Grid sx={{ textAlign: "right" }} size={6}>
<Typography
variant="h6"
component="div"
style={{ fontWeight: "800"}} >
<CloudIcon sx={{ fontSize: 200 ,marginRight:2}} />
</Typography>
</Grid>
</Grid>

       
        </CardContent>
    </Card>
  </Container>
  
    </>
  )
}

export default WeatherContainer;