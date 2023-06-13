import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Card, CardContent, Typography, Select, MenuItem } from '@material-ui/core';
import { CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        maxWidth: 400,
        marginTop: 20 // Set the desired max-width value here
    },
});


export default function MultiActionAreaCard() {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>

                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
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