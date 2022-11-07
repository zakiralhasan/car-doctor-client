import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import HeaderMain from "../Shared/Headers/HeaderMain";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const { _id, title, price } = useLoaderData();

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || undefined;
    const message = form.message.value;
    // console.log(name, phone, message);

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Your order placed successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <HeaderMain></HeaderMain>
      <div className="p-6">
        <form onSubmit={handleForm}>
          <h1 className="text-2xl text-left">
            Your selected order is: {title}
          </h1>
          <h2 className="text-left text-xl">Price: ${price}</h2>
          <div className="grid md:grid-cols-2 gap-4 p-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input w-full input-bordered"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input w-full input-bordered"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="input w-full input-bordered"
              required
            />
            <input
              defaultValue={user?.email}
              type="text"
              name="email"
              placeholder="Your Email"
              className="input w-full input-bordered"
              readOnly
            />
          </div>
          <div className="p-6">
            <textarea
              name="message"
              className="textarea textarea-bordered h-24 w-full "
              placeholder="Message"
            ></textarea>
          </div>
          <button className="bg-[#FF3811] text-white px-5 py-2 rounded-md">
            Place your order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
