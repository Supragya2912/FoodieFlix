import React, { useEffect, useRef, useState } from "react";
import CardMedia from '@mui/material/CardMedia';
import { Card, CardContent, Typography, Select, MenuItem, Button } from '@material-ui/core';
import { CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatchCart, useCart } from './ContextReducer';

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


export default function MultiActionCard(props) {


    const classes = useStyles();
    const options = props.options;
    const foodItem = props.foodItem;
    const priceOptions = options ? Object.keys(options) : [];
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    console.log(props);

    const handleAddtoCart = async () => {

        let food = []
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;
                break;
            }
        }
        console.log(food)
        console.log(new Date())
        // console.log('This is foodItem',foodItem);

        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, quantity: quantity })
                return
            }
            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, quantity: quantity, size: size, img: props.ImgSrc })
                console.log("Size different so simply ADD one more to the list")
                return
            }
            return
        }

        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, quantity: quantity, size: size })
    }


    let finalPrice = quantity * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])

    return (
        <Card className={classes.card}>
            <CardActionArea>

                <CardMedia className='cardMedia'
                    component="img"
                    height="140"
                    src={props.foodItem.img}
                    alt="pasta"
                />

                <CardContent className='cardContent'>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.foodItem.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.foodItem.description}
                    </Typography>
                </CardContent>

            </CardActionArea>


            <CardActions className={classes.cardActions}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

                    <div style={{ marginBottom: '10px' }}>

                        <Select onChange={(e) => setQuantity(e.target.value)}>
                            {Array.from(Array(5).keys()).map((value) => (
                                <MenuItem value={value + 1} key={value + 1}>
                                    {value + 1}
                                </MenuItem>
                            ))}
                        </Select>

                        <Select className='m-2 h-100 rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {priceOptions
                                .filter((data) => data !== "_id") // Exclude "_id" from options
                                .map((data) => (
                                    <option value={data} key={data}>
                                        {data}
                                    </option>
                                ))
                            }
                        </Select>

                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        Rs.{finalPrice}/-
                    </div>
                    <hr />
                    <div>
                        <Button style={{ backgroundColor: '#ffd54f', color: 'black' }} variant="contained" color="primary" onClick={handleAddtoCart}>Add to Cart</Button>
                    </div>
                </div>
            </CardActions>

        </Card>
    );
}