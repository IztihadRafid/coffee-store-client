import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="p-3">
        <img src={img} alt="pic" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl font-bold">{title}</h2>
        <div className="flex justify-between items-center space-x-7 font-bold">
          <p className="text-lg text-orange-500 gap-7">Price: ${price}</p>
          <div className="card-actions">
           <Link to={`/checkout/${_id}`}>
           <button className=" text-lg text-orange-500 ">
              <FaArrowRight />
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
