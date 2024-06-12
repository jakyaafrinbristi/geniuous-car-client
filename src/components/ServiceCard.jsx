import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({service}) => {
    const{img,title,price}=service;
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} className="rounded-xl " />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title font-bold text-2xl">{title}</h2>
               <div className="text-red-700 font-semibold flex justify-between">
               <p>Price:${price}</p>
               <div className="px-5 py-5 rounded-full bg-slate-100">  <FaArrowRightLong /></div>
             
               </div>
                    
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;