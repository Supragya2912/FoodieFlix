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


export default function MultiActionAreaCard() {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>

                <CardMedia className='cardMedia'
                    component="img"
                    height="140"
                    image="https://source.unsplash.com/random/30×30/?pasta                    "
                    alt="pasta"
                />

                <CardContent className='cardContent'>
                    <Typography gutterBottom variant="h5" component="div">
                        Pasta
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
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
                <Select>
                    <MenuItem value={1}>Half</MenuItem>
                    <MenuItem value={2}>Full</MenuItem>
                </Select>
                <div>
                    Total Price
                </div>
            </CardActions>

        </Card>
    );
}