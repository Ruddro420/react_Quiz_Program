/* eslint-disable react/prop-types */
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import './SingleHome.css'

const SingleHome = ({ topic , seleectButtonHandler}) => {

    // eslint-disable-next-line no-unused-vars
    const { id, name, logo, total } = topic;

    return (
        <div>
            <Container maxWidth="sm">
                <Card className='border-card'>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={logo}
                            alt="green iguana"
                            className='card-img'
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Total Questions : {total}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={()=>seleectButtonHandler(id)} className='button-start'>
                            Start Now !! 
                        </Button>
                    </CardActions>
                </Card>
            </Container>

        </div>
    );
};

export default SingleHome;