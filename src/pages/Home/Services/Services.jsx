import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('https://car-doctor-server-delta-wine.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
  return (
    <div className="mt-4">
      <div className="text-center w-3/4 mx-auto">
        <h1 className="text-5xl font-bold text-orange-500">Our Services</h1>
        <p>
          At our service, excellence is our standard. From inquiries to
          resolutions, we are dedicated to providing prompt and personalized
          assistance. Count on us for efficient solutions tailored to your
          needs, ensuring your satisfaction every step of the way.
        </p>
      </div>
     <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {
            services.map(service=> <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
     </div>
    </div>
  );
};

export default Services;
