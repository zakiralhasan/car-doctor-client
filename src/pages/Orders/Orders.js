import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import HeaderForm from "../Shared/Headers/HeaderForm";
import OrdersRow from "./OrdersRow";

const Orders = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` }, //used for JWT
    })
      .then((res) => {
        console.log(res);
        if (res.status === 403 || res.status === 401) {
          return logoutUser();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [user?.email]);
  console.log(orders);
  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure,  to cancel this order?");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Your order hase been successfully cancled");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remainingOrders = orders.filter((order) => order._id !== id);
          const changedOrder = orders.find((order) => order._id === id);
          changedOrder.status = "Approved";
          const newOrders = [changedOrder, ...remainingOrders];
          setOrders(newOrders);
        }
      });
  };
  return (
    <div>
      <div className="mb-6">
        <HeaderForm></HeaderForm>
      </div>
      <h1>you have {orders?.length} orders</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <OrdersRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
