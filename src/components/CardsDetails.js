import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ADD, DLT, REMOVE } from "../redux/actions/action";
import { useDispatch } from "react-redux/es/exports";
const CardsDetails = () => {
  const [data, setData] = useState([]);
 

  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useNavigate();

  const send = (e) =>{
    dispatch(ADD(e))
  }

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  const remove = (item) =>{
    dispatch(REMOVE(item))
  }


  const getData = useSelector((state) => state.cartreducer.carts);
  // console.log(getData);

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>
        <section className="container mt-3">
          <div className="itemsdetails" style={{ backgroundColor: "#fff" }}>
            {data.map((elm, id) => {
              return (
                <>
                  <div className="items_img">
                    <img src={elm.imgdata} />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant</strong> : {elm.rname}
                          </p>
                          <p>
                            <strong>Price</strong> : ₹ {elm.price}
                          </p>
                          <p>
                            <strong>Dishes</strong> : {elm.address}
                          </p>
                          <p>
                            <strong>Total</strong> : ₹ {elm.price * elm.qnty}
                          </p>
                          <div className="mt-5 d-flex justify-content-between align-items-center" style={{width:100, cursor:'pointer', background:"#ddd", color:'#111'}}>
                            <span style={{fontSize:'24px'}} onClick={elm.qnty <= 1 ? dlt(elm):()=>remove(elm)}>-</span>
                            <span style={{fontSize:'22px'}}>{elm.qnty}</span>
                            <span style={{fontSize:'24px'}} onClick={()=>send(elm )}>+</span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating :</strong>{" "}
                            <span
                              style={{
                                backgroundColor: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "4px",
                              }}
                            >
                              {elm.rating} ★
                            </span>
                          </p>
                          <p>
                            <strong>Order Review :</strong>
                            <span>{elm.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove :</strong>
                            <span>
                              <i
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: "20px",
                                  cursor: "pointer",
                                }}
                                onClick={() => dlt(elm.id)}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
