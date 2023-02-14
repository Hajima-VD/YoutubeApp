import React from 'react';
import{ Link } from 'react-router-dom';
import { Typography , Card ,CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl,demoVideoTitle,demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({video:{id: {videoId} ,  snipped}}) => {


    return (
        <Card>
            <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
              <CardMedia 
              image={snipped?.thumbnails?.hight?.url}
              alt={snipped?.title}
              sx={{ with:358 , height:180}}
              />
            </Link>
           <CardContent  
           sx={{background: '#1e1e1e', height: '106px'}}>
            <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                    {snipped?.title.slice(0, 60) || demoVideoTitle.title.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={snipped?.channelId ? `/channal/${snipped?.channelId}`: demoChannelUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#grey">
                    {snipped?.channalTitle || demoChannelTitle}
                    <CheckCircle 
                    sx={{fontSize:12 , color:'grey' , ml: '5px'}} />
                </Typography>
            </Link>
           </CardContent>
            
            
        </Card>
    );
}

export default VideoCard;
