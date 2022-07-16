import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import Cart from "../assets/cart.gif";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { DLT } from "../redux/actions/action";
import { useDispatch } from "react-redux/es/exports";

const Header = () => {
  const getData = useSelector((state) => state.cartreducer.carts);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [price, setPrice] = useState(0)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };  const dlt = (id)=>{
    dispatch(DLT(id))
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const total =() =>{
    let price = 0;
    getData.map((ele, id)=>{
      price = ele.price * ele.qnty + price
    });
    setPrice(price)
  }
  useEffect(()=>{
    total();
  }, [total])


  return (
    <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
      <Container>
        <NavLink to="/" className="text-decoration-none text-light mx-3">
          Add to Card
        </NavLink>
        <Nav className="me-auto">
          <NavLink to="/" className="text-decoration-none text-light">
            Home
          </NavLink>
        </Nav>
        <Badge
          badgeContent={getData.length}
          color="primary"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <i
            className="fa-solid fa-cart-shopping text-light"
            style={{ fontSize: "25px", cursor: "pointer" }}
          ></i>
        </Badge>
      </Container>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {getData.length ? (
          <div
            className="card_details"
            style={{ width: "24rem", padding: "10px" }}
          >
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
                {getData.map((e, i) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                            <img
                              src={e.imgdata}
                              style={{ width: "5rem", height: "5rem" }}
                            />
                          </NavLink>
                        </td>
                        <td>
                          <p>{e.rname}</p>
                          <p>Price : ₹ {e.price}</p>
                          <p>Quantity : {e.qnty}</p>
                          <p>
                            <i
                              className="fas fa-trash smalltrash"
                              style={{
                                color: "red",
                                fontSize: "20px",
                                cursor: "pointer",
                              }}
                              onClick={()=>dlt(e.id)}
                            ></i>
                          </p>
                        </td>
                        <td>
                          <i
                            className="fas fa-trash largetrash"
                            style={{
                              color: "red",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                            onClick={()=>dlt(e.id)}
                          ></i>
                        </td>
                      </tr>
                    </>
                  );
                })}
                <p className="text-center">Total : ₹ {price}</p>
              </tbody>
            </Table>
          </div>
        ) : (
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: "24rem", padding: 10, position: "relative" }}
          >
            <i
              className="fas fa-close smallclose"
              style={{
                position: "absolute",
                top: 2,
                right: 20,
                fontSize: 23,
                cursor: "pointer",
              }}
              onClick={handleClose}
            ></i>
            <p style={{ fontSize: 22 }}>Your Cart is Empty</p>
            <img
              src={Cart}
              className="emptycart_img"
              style={{ width: "5rem", padding: 10 }}
            />
          </div>
        )}
      </Menu>
    </Navbar>
  );
};

export default Header;
