import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import EditProduct from "./EditProduct";
import avatar from "../images/avatar.png";
import { Modal, Button } from "react-bootstrap";
import MyProducts from "./MyProducts";

const Seller = () => {
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState("");
  const [shopaddress, setshopAddress] = useState("");
  const [shopemail, setshopEmail] = useState("");
  const [shopName, setshopName] = useState("");
  const [shopDescription, setshopDescription] = useState("");
  const [shopImage, setshopImage] = useState(avatar);

  const callSellerPage = async () => {
    try {
      const res = await fetch(
        `/shopinfo?sellerid=${localStorage.getItem("id")}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      console.log(data);
      setshopName(data[0].sName);
      setshopDescription(data[0].sDescription);
      setshopAddress(data[0].address);
      setshopEmail(data[0].email);
      setshopImage(data[0].shopImage);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log("home page error" + err);
    }
  };

  useEffect(() => {
    console.log("sellerid " + localStorage.getItem("id"));
    callSellerPage();
  }, []);

  const changeid = () => setId(localStorage.getItem("id"));
  return (
    <>
      <div class="container seller-container">
        <div className="shopImg">
          <img
            src={`/uploads/${shopImage}`}
            alt="profileImg"
            height="200px"
            width="200px"
          />
        </div>

        <div className="shopDetail">
          <h1>{shopName}</h1>
          <h5>{shopDescription}</h5>

          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={shopaddress}
            placeholder="Address.."
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={shopemail}
            placeholder="abc@gmail.com"
          />
        </div>

        <div className="newProductButton">
          <Link className="btn btn-sm btn-success m-1" to="/addProduct">
            Add New Product
          </Link>
        </div>

        <Button onClick={changeid} className="btn btn-sm btn-success m-1">
          My Products {id && <MyProducts id={localStorage.getItem("id")} />}
        </Button>

        <div className="orders">
          <h2>Your Orders</h2>
          <div className="product-list">
            <table className="table table-hover table-sm table-responsive">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {products.map((product) => ( */}
                <tr>
                  {/* <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.brand}</td>
                                <td> */}
                  <td>12345</td>
                  <td>Handbag</td>
                  <td>1000</td>
                  <td>Bag</td>
                  <td>Gucci</td>
                  <td>
                    {/* <button className="btn btn-sm btn-outline-success m-1"> 
                                    Edit
                                </button> */}
                    <button
                      className="btn btn-sm btn-outline-success m-1"
                      onClick={() => setModalShow(true)}
                    >
                      Edit
                    </button>

                    <EditProduct
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                    {/* <Link className="btn btn-sm btn-outline-success m-1"  to="./EditProduct">Edit</Link> */}
                    <button
                      className="btn btn-sm btn-outline-success m-1"
                      // onClick={() => deleteHandler(product)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>12345</td>
                  <td>Handbag</td>
                  <td>1000</td>
                  <td>Bag</td>
                  <td>Gucci</td>
                  <td>
                    <button className="btn btn-sm btn-outline-success m-1">
                      Edit
                    </button>{" "}
                    <button className="btn btn-sm btn-outline-success m-1">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seller;
