import React, { useState } from "react";
import { Card, Button, Modal, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeItem, updateItem } from "../actions";
import ImageUploading from "react-images-uploading";
import { Link } from "react-router-dom";



const Items = () => {

  const data = useSelector(state => state.createItems);
  console.log("fetch", data);


  const addCart = useSelector((event) => event.addCart);
  const dispatch = useDispatch();
  console.log("cart", addCart)


  const [dataUp, setDataUp] = useState({})
  const [show, setShow] = useState(false)

  // const updateModal = (item) => {
  //   setDataUp(item) 
  //   setShow(true)
  // }


  const ShowItems = () => {
    if (data[0] === undefined) return data.shift();
    

  return (
    data.map((item) => {
      return (
        <div>

          <Card className="mt-3 m-3" style={{ width: "18rem" }} >


            <Card.Img className='card-image-top' variant="top" src={item.image} />

            <Card.Body>
              <Card.Text> {item.name}</Card.Text>
              <Card.Text> {item.description} </Card.Text>
            
              <Card.Text>
                 Price : ₹{item.price}
              </Card.Text>
              <Button variant="outline-secondary" onClick={() => dispatch(addToCart(item))} > Add to cart</Button>
              
              <Link to={{pathname:'/createItems', aboutProps:{ item }}} params={{itemData : item}}><Button className="m-2" variant="outline-secondary"> Update </Button></Link>

              <Button className="m-2" variant="outline-secondary" onClick={() => dispatch(removeItem(item.id))} > Delete Item </Button>
            </Card.Body>
          </Card>

        </div>
      );
    })
  )
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
}

export default Items;
