import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createItems, updateItem } from "../actions";
import { v4 as uuidv4 } from 'uuid';
import ImageUploading from "react-images-uploading";


const CreateItems = (props) => {

  const myItems = useSelector((event) => event.createItems)
  const dispatch = useDispatch();

  console.log("create", myItems)
  // const [updateData, setUpdateData] = useState({})
  console.log('pr', props.location.aboutProps);
  const check = props.location.aboutProps;
  var updateData;
  console.log(updateData, 'in');

  {
    check === undefined ?
      updateData = ({
        id: '',
        name: '',
        description: '',
        image: '',
        price: 0
      }) :
      updateData = ({
        id: check.item.id,
        name: check.item.name,
        description: check.item.description,
        image: check.item.image,
        price: check.item.price

      })
  }

  const [item, setItem] = useState({
    id: updateData.id,
    name: updateData.name,
    description: updateData.description,
    image: updateData.image,
    price: updateData.price,
    quantity: 0,
  });
  const [image, setImage] = useState();

  function handleInput(item) {
    {
      check === undefined ?
        dispatch(createItems({ ...item, id: uuidv4() }, "CREATE")) :
        dispatch(createItems({ ...item }, "UPDATE"))
    }

  }
  const onChange = (image) => {
    setImage(image);
    console.log(image[0].url);
    setItem({ ...item, image: image[0].url });
  };

  return (
    <Container>
      <div class="form-group row">
        <label for="example-text-input" class="col-2 col-form-label" >Item Name</label>
        <div class="col-10">
          <input
            class="form-control"
            type="text"
            value={item.name}
            onChange={(e) =>
              setItem({ ...item, name: e.target.value })
            }
            required />
        </div>
      </div><br />
      <div class="form-group row">
        <label for="example-search-input" class="col-2 col-form-label"> Item Description </label>
        <div class="col-10">
          <textarea
            class="form-control"
            value={item.description}
            type="text"

            onChange={(e) =>
              setItem({ ...item, description: e.target.value })
            }
          />
        </div>
      </div><br />
      <div class="form-group row">
        <label for="example-email-input" class="col-2 col-form-label">Item Image</label>
        <div class="col-5" style={{ width: "120px" }} >
          <ImageUploading
            class="form-control"
            single
            value={image}
            onChange={onChange}
            dataURLKey="url"
          >
            {({ onImageUpload }) => (
              <Button variant="outline-secondary" onClick={onImageUpload}>Choose Image</Button>
            )}
          </ImageUploading>
        </div>
      </div><br />
      <div class="form-group row">
        <label for="example-text-input" class="col-2 col-form-label">Item Price</label>
        <div class="col-10">
          <input

            class="form-control"
            type="number"
            value={item.price}
            min="0"
            onChange={(e) =>
              setItem({ ...item, price: e.target.value })
            }
          />
          <br />
          <Link to="/Items">
            <Button onClick={() => handleInput(item)} style={{ width: "200px" }}>Add New Item </Button>
          </Link>
        </div>
      </div><br />

      <>
        <div align="center">

          <Card className="mt-3 m-3" style={{ width: "18rem" }} >

            <Card.Title>Your Item</Card.Title>
            <Card.Img className='card-image-top' variant="top" src={item.image} />

            <Card.Body>
              <Card.Text>Item Name: {item.name} </Card.Text>
              <Card.Text>Item Description: {item.description} </Card.Text>

              <Card.Text>
                Price : ₹{item.price}
              </Card.Text>

            </Card.Body>
          </Card>

        </div>
      </>


    </Container>


  );
}
export default CreateItems;



