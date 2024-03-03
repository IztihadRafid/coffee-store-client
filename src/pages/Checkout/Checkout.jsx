import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { data } from "autoprefixer";

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id, description, price, img } = service;
  const {user} = useContext(AuthContext)
  const handleBookService=(event)=>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email= user?.email;
    const booking={
        customerName: name,
        email,
        img,
        date,
        service:title,
        service_id: _id,
        price: price
    }
    console.log(booking);

    fetch('https://car-doctor-server-delta-wine.vercel.app/bookings/',{
        method: 'POST',
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.insertedId){
            alert("Service Booked Successfully")
        }
    })
  }
  return (
    <div>
      <h2 className="text-center text-4xl">
        Book service:{" "}
        <span className="text-orange-500 font-semibold">{title}</span>
      </h2>

      <form className="card-body" onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              defaultValue={user?.name}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              name="price"
              type="text"
              defaultValue={"$" + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-orange-500 font-medium text-white"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
