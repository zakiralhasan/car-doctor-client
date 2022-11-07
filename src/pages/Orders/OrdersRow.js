import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const OrdersRow = ({ order, handleDelete, handleUpdate }) => {
  const [orderService, setOrderService] = useState();
  const {
    _id,
    serviceName,
    email,
    message,
    price,
    customer,
    phone,
    serviceID,
    status,
  } = order;
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceID}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, []);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-outline">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded w-12 h-12">
              <img
                src={orderService?.img && orderService.img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <th>
        <button
          onClick={() => handleUpdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status}
        </button>
      </th>
    </tr>
  );
};

export default OrdersRow;
