
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const{_id,title,price,img}=service;
    return (

        <div className="card  bg-base-200 shadow-lg">
            <figure><img src={img} alt="person" /></figure>
            <div className="card-body">
            <h3 className="text-3xl font-bold">{title}</h3>
            <h5 className="text-xl text-orange-500 font-bold">{}Price: ${price}</h5>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                    <button className="text-orange-500">
                    <AiOutlineArrowRight/>
                    </button>
                    </Link>
                    
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;