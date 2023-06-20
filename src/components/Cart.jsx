import React from 'react'
import { Button } from '@mui/base'
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Cart() {

    let data = useCart();
    let dispatch = useDispatchCart();
    console.log(data);
    if (data.length === 0) {
        return (
            <div>
                The Cart is Empty !
            </div>
        )
    }

    const handleCheckOut = async () => {

        let userEmail = localStorage.getItem('userEmail');
        console.log('This msg is from Cart',userEmail);
        let response = await fetch("http://localhost:5000/foodie/orderData", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            order_data: data,
            email: userEmail,
            order_date: new Date().toDateString()
          })
        });
        console.log("JSON RESPONSE:::::", response.status)
        if (response.status === 200) {
          dispatch({ type: "DROP" })
        }
      }
    
    // let totalPrice =  data.reduce((total, food) => total + food.price, 0)
    return (
        <div>
            <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
                <table className='table table-hover'>
                    <thead className='text-success fs-4'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Option</th>
                            <th>Amount</th>
                        </tr>

                    </thead>
                    <tbody>
                        {data.map((food, index) => (
                            <tr>
                                <th scope='row' >{index + 1}</th>
                                <td >{food.name}</td>
                                <td>{food.qty}</td>
                                <td>{food.size}</td>
                                <td>{food.price}</td>
                                <td ><button type="button" className="btn p-0"><DeleteIcon onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <Button variant="contained" onClick={handleCheckOut}>Check Out</Button>
                </div>
            </div>
        </div>
    )
}