import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Card, CardContent, Typography, Select, MenuItem } from '@material-ui/core';
import { CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        maxWidth: 400,
        marginTop: 20,
        marginLeft: 10,
        border: "2px solid black"// Set the desired max-width value here
    },
    cardMedia: {
        objectFit: 'contain',
        width: '100%' // Fix the image width to 100%
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: 'white'
    },
});


export default function MultiActionAreaCard(props) {
    

    const classes = useStyles();

    const options = props.options;
    const priceOptions = options ? Object.keys(options) : [];
    console.log(priceOptions);

    return (
        <Card className={classes.card}>
            <CardActionArea>

                <CardMedia className='cardMedia'
                    component="img"
                    height="140"
                    image={props.imgSrc}
                    alt="pasta"
                />

                <CardContent className='cardContent'>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.foodName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>

            </CardActionArea>
            <CardActions>
                <Select>
                    {
                        Array.from(Array(5).keys()).map((value) => {
                            return <MenuItem value={value + 1}>{value + 1}</MenuItem>
                        })
                    }
                </Select>
                <Select className='m-2 h-100 bg-success rounded'>
                  {
                    priceOptions.map((data) => {
                        return <MenuItem value={data} key={data}>{data}</MenuItem>
                    })
                  }
                  
                </Select>
                <div>
                    Total Price
                </div>
            </CardActions>

        </Card>
    );
}