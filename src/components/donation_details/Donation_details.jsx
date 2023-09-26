import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonateItems } from "../../utility/localstorage";

const Donation_details = () => {


    const data = useLoaderData()
    const {id }= useParams()
    const intId = parseInt(id)
    const singleDonatedata = data.find(item=>item.id === intId)
    const {img,title,description,price,title_color
    } = singleDonatedata
    // console.log(singleDonatedata)

const handleDonate = ()=>{
    saveDonateItems(intId)
    toast(`You have donated $${price}`) 
}

    return (
        <div className="container mx-auto mt-10 mb-16">
            
            <img className="w-full rounded-md container mx-auto" src={img} alt="" />
            <div className="relative">
            <div className="bg-[#0B0B0B7F] opacity-75 lg:h-[130px] rounded-b-lg -mt-[130px]"></div>
            <div className="flex items-center absolute top-1/3"><button onClick={handleDonate} style={{backgroundColor:title_color}} className="ml-3 text-white px-5 py-2 rounded-lg">{`Donate $${price}`}</button></div>
            </div>
            <h2 className="text-4xl font-bold mt-14 mb-5">{title}</h2>
            <p className="">{description}</p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Donation_details;