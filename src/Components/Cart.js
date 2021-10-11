import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, incrementItem, decrementItem, removeCartItem } from "../actions";

const Cart = () => {
  const data = useSelector(state => state.addCart)
  const dispatch = useDispatch();
  console.log('cart', data);

  const ShowItems = () => {
    console.log('show');
    return data.map((item) => {
      return (

        <>
          <div>
            <Card className="mt-3 m-3" style={{ width: "18rem" }}>
              <Card.Img
                className="card-image-top"
                variant="top"
                src={item.image}
              />
              <Card.Body>
                <Card.Title>{item.name} </Card.Title>
                <Card.Text>{item.description} </Card.Text>
                <Card.Text>
                  <h4> Price : ₹{item.price}</h4>
                </Card.Text>
                <Card.Text>
                  <Button variant='outline-secondary' onClick={() => dispatch(addToCart(item))}>+</Button>
                  Quantity : {item.quantity}
                  <Button variant='outline-secondary' onClick={() =>dispatch(decrementItem(item))} >-</Button>
                </Card.Text>
                <Button className="m-2" variant="outline-secondary" onClick={() => dispatch(removeCartItem(item.id))}>Remove Item
                </Button>
              </Card.Body>
            </Card>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div>
        {data[0] === undefined ? (
          <div>NO ITEMS AVAILABLE</div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6,1fr)",
              gridGap: "10px",
            }}
          >
            <ShowItems />
          </div>
        )}
      </div>
      

    </>
  );
};
export default Cart;







