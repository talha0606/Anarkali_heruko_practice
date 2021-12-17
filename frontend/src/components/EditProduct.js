import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import logo from "../images/logo.png";
import avatar from "../images/avatar.png";
// import {previewImage  } from "./AddProduct";
// import AddProduct from "./AddProduct";

const EditProduct = (props) => {
  console.log("EditProduct/Props: " + props.product);
  const [previewimage, setpreviewimage] = useState(avatar);
  const [filename, setfilename] = useState("");
  const [category, setcateory] = useState(1);
  const categories = [
    { key: 1, value: "Bags" },
    { key: 2, value: "Books" },
    { key: 3, value: "Scarf" },
    { key: 4, value: "Toys" },
    { key: 5, value: "Sports" },
    { key: 6, value: "Groceries" },
    { key: 7, value: "Pents" },
    { key: 8, value: "Kurtas" },
    { key: 9, value: "Watches" },
    { key: 10, value: "Cameras" },
  ];

  //for image changing
  const previewImage = (event) => {
    setfilename(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setpreviewimage(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);

    setpreviewimage(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="ModalHead">
          Edit Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Product Name</h4>
        <div>
          <form
            // onSubmit={handleSubmit(onChangeClick)}
            className="login-form"
            // encType="multipart/form-data"
          >
            <Link to="/">
              <img src={logo} className="login-logo" alt="logo" />
            </Link>
            <img
              src={previewimage}
              className="img-round mx-auto d-block img-thumbnail avatar"
              id="myImg"
              alt="Shop avatar"
            />

            <label htmlFor="pName">Product Name</label>
            <input
              // className={classNames("", { "is-invalid": errors.sName })}
              type="text"
              id="pName"
              name="pName"
              // value={}
              // onChange={handleInput}
              placeholder="Product Name.."
              // {...register("pName", {
              //     required: "This field is required*",
              //     minLength: {
              //     value: 4,
              //     message: "Atlease 4 characters long*",
              //     },
              // })}
            />
            {/* {errors.sName && (
                <div className="invalid-feedback">{errors.sName.message}</div>
                )} */}

            <label htmlFor="pDescription">Product Description</label>
            <input
              type="text"
              id="pDescription"
              name="pDescription"
              // value={pdescription}
              // onChange={(e) => setsdescription(e.target.value)}
              placeholder="Product Description.."
            />
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              // value={address}
              // onChange={(e) => setaddress(e.target.value)}
              placeholder="Price.."
            />
            <label htmlFor="product-img" id="img-label">
              Choose Image
            </label>
            <input
              type="file"
              id="image"
              name="productImage"
              filename="productImage"
              onChange={previewImage}
            />
            <label htmlFor="category">Category</label>
            <select
              name="category"
              onChange={(e) => {
                setcateory(e.target.value);
                console.log(e.target.value);
              }}
            >
              {categories.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
              {/* <option>
                    Bags
                    </option> */}
            </select>
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              name="brand"
              //   value={brand}
              id="brand"
              //   onChange={(e) => setBrand(e.target.value)}
              placeholder="Brand Name.."
            ></input>
            <label htmlFor="countInStock">Count In Stock</label>
            <input
              type="text"
              name="countInStock"
              //   value={countInStock}
              id="countInStock"
              placeholder="Count in Stock.."

              //   onChange={(e) => setCountInStock(e.target.value)}
            ></input>
            <input
              type="submit"
              onClick={props.onHide}
              value="Edit Product"
              name="add"
            />
          </form>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
              <Button onClick={props.onHide}>Save</Button>
            </Modal.Footer> */}
    </Modal>
  );
};

export default EditProduct;
