import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);


  return (
    <>
    <h3 className="title">Orders ({allOrders.length})</h3>
        {allOrders.length === 0 && <p>You haven't placed any orders today</p>}
      
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>qty</th>
              <th>price</th>
              <th>mode</th>
            </tr>
          </thead>

          <tbody>
            {allOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

        {/* <Link to="/" className="btn">
          Get started
        </Link> */}
    </>
  );
};

export default Orders;