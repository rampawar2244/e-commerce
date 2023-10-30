import React, { useState } from "react";
import { ShoppingCart } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";

// Assuming addToCart is a Redux action
import { addToCart, updateCartCount } from "../redux/actions/productActions";

function Navbar() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.count);
  const cartItems = useSelector((state) => state.cart);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddToCart = () => {
    // Dispatch your addToCart action here
    // You may need to pass the product information to the action
   
    dispatch(addToCart());
    dispatch(updateCartCount(cartCount + 1));
    
  };
  console.log(cartItems, "hello utems")
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="primary" onClick={handleShow}>
              <ShoppingCart />
              <Badge bg="secondary">{cartCount}</Badge>
            </Button>
          </form>
        </div>
      </nav>

      {/* Shopping Cart Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Shopping Cart </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.cart === 0 ? (
            <p>There is no cart Item Here!</p>
          ) : (
            <div>
              <ul>
                {cartItems.cart.map((item) => (
                  <li key={item.id}>
                     <div className="row">
                      <div className="col-6">
                        <img src={item.image} alt={item.title} width={50} height={50} />
                      </div>
                      <div className="col-6">
                         <p>{item.title}</p>
                         <h5>{item.price}</h5>
                      </div>
                     </div>
                     <hr />
                  </li>
                  
                  ))}
              </ul>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            PLACE ORDER
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Navbar;
