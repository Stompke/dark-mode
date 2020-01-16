import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
  });


const Info = ({allExchanges}) => {

    const classes = useStyles();


    // useEffect(() => {
    //     console.log(props.allExchanges.map(exchange => console.log(exchange)))
    // },[])
    return (
        <div>
            
            {allExchanges.map(item => {
                return(
                    // <h4 key={item.id}>{item.name}</h4>


            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    // component="img"
                    // alt="Contemplative Reptile"
                    // height="140"
                    // image="/static/images/cards/contemplative-reptile.jpg"
                    // title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        This Coin
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.name}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
                )
        })}
        </div>
    )
}

export default Info;