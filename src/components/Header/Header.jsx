import {useLocation } from "react-router-dom";
import img from'../../assets/images/Logo.png'
import Navlink from "../navLink/Navlink";

const Header = () => {
    const location = useLocation()
    const navLinks= [
        {path:'/',name:'Home'},
        {path:'/donation',name:'Donation'},
        {path:'/statistics',name:'Statistics'}]
        
    return (
        <div className="flex justify-between container mx-auto items-center mt-10">
            <img src={img} alt="" />
            <div className="flex list-none gap-12 text-[18px] font-bold">
                {
                    navLinks.map((links,idx)=><Navlink key={idx} links={links} location={location}  ></Navlink>)
                }
            </div>
        </div>
    );
};

export default Header;