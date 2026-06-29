import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

 
export default function InfoBox({info})  {
    const INIT_URL="https://media.istockphoto.com/id/641051864/photo/dusty-shore.jpg?s=612x612&w=is&k=20&c=L3rjTBBUqgpk5jYR6ZzUVg0qcPbQnMs5Fbs3Wna07LQ="

    const HOT_URL="https://media.istockphoto.com/id/453477435/photo/hot.jpg?s=612x612&w=is&k=20&c=bUVrO0K_9jMqIPZ1xgFt3wY1pI5pbJl2kezgwsa0yw8=";
    const COLD_URL="https://media.istockphoto.com/id/1061972184/photo/landscape-of-snow-mountains-and-mountain-road-to-nubra-valley-in-leh-ladakh-india.jpg?s=612x612&w=is&k=20&c=4O8L8S1qSc-SDUNfD9JndvSCSh8OMz6ArgCmP1fDj5o=";
    const RAIN_URL="https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.jpg?s=612x612&w=is&k=20&c=rDTJ1zsXF1A9U0aWY_RGLNjyLWwI6OI_a5NiJmY9dfI=";
    return (
        <div className="InfoBox">
            <div className="cardContainer">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAIN_URL:info.temp>15? HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80? <ThunderstormIcon/>:info.temp>15?<SunnyIcon/>:<AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" sx={{color: 'text.secondary'}}  component="span">

            <p>Tempreature={info.temp}&deg;C</p>
            <p>Humidity={info.humidity}</p>
            <p>Min Temp={info.tempMin}&deg;C</p>
            <p>Max Temp={info.tempMax}&deg;C</p>
            <p>Feels Like={info.feelslike}&deg;C</p>
            <p>The whether  can be described as <i>{info.whether}</i>  and feels like{info.feelslike}&deg;C</p>
        
        </Typography>
      </CardContent>
      
    </Card>
    </div>

        </div>
    );
}