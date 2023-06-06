import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const [services,setServices]=useState([]);

    //aescending and descending
    const[asc,setAsc]=useState(true);

    //searching
    const searchRef = useRef(null);
    const [search, setSearch] = useState('');

    const handleSearch =()=>{
        console.log(searchRef.current.value);
        setSearch(searchRef.current.value);
    }

    useEffect(()=>{
        fetch(`https://car-doctor-server-phi-rosy.vercel.app/services?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[asc,search])
    return (
        <div className="bg-base-200 pt-4">
            <div className="hero">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <h3 className="text-3xl text-orange-500 font-bold">Service</h3>
    <h1 className="text-5xl font-bold">Our Service Area</h1>
      <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
    </div>
  </div>
</div>
<div className="form-control">
                    <div className="input-group">
                        <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <div className="mt-4">
<button onClick={()=>setAsc(!asc)} className="btn-primary rounded mb-2 p-2 ms-2">
    
    {asc?'Price: High': 'Price: Low'}
</button>
</div>
<div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
    {
        services.map(service=><ServiceCard key={service._id}
        service={service}></ServiceCard>)
    }
</div>
        </div>
    );
};

export default Service;