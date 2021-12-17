import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import EditProduct from "./EditProduct";

const MyProducts = ({ id }) => {
  console.log("MyProducts/Sellerid" + id);
  const [modalShow, setModalShow] = useState(false);
  const [myproducts, setMyProducts] = useState();
  const [deleteProduct, setDeleteProduct] = useState(false);
  const Myprod = async (filters) => {
    try {
      const res = await fetch(`/myproducts?id=${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        //body: JSON.stringify({ filters: filters }),
        //credentials: "include",
      });

      const data = await res.json();
      console.log("MyProducts", data);
      if (data.length == 1) {
        setMyProducts(data[0]);
      } else {
        setMyProducts(data);
      }
      //console.log("MyProducts", myproducts);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log("home page error" + err);
    }
  };
  useEffect(() => {
    Myprod();
  }, [deleteProduct]);

  const deleteHandler = async (id) => {
    try {
      setDeleteProduct(true);
      const res = await fetch(`/deleteproduct?id=${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        //body: JSON.stringify({ filters: filters }),
        //credentials: "include",
      });

      const data = await res.json();
      console.log("DeleteProductMessage: " + data[0]);
    } catch (err) {
      console.log("home page error" + err);
    }
  };
  return (
    // <h1>Myproducts</h1>
    <>
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
              {myproducts?.map((prod) => (
                <tr>
                  <td>{prod._id}</td>
                  <td>{prod.pName}</td>
                  <td>{prod.price}</td>
                  <td>{prod.brand}</td>
                  <td>{prod.stock}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-success m-1"
                      onClick={() => setModalShow(true)}
                    >
                      Edit
                    </button>

                    <EditProduct
                      product={prod}
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                    {/* <Link className="btn btn-sm btn-outline-success m-1"  to="./EditProduct">Edit</Link> */}
                    <button
                      className="btn btn-sm btn-outline-success m-1"
                      onClick={() => deleteHandler(prod._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {/* <tr>
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
                  </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyProducts;
