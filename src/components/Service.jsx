import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

                    

const Service = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch("services.json")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },
        [])

    return (
        <div>
            <div className="text-center space-y-2">
                <h3 className="text-xl text-red-600 font-bold">Service</h3>
                <h1 className="font-bold text-3xl">Our Service Area</h1>
                <p className="max-w-2xl mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-12">
                {
                    services.map(service=><ServiceCard key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default Service;