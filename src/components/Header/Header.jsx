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
        <div className="flex justify-between container lg:mx-auto items-center px-2 mt-10">
            <img className="w-[140px] md:w-[250px] lg:w-[250px]" src={img} alt="" />
            <div className="flex list-none gap-2 md:gap-8 lg:gap-12 lg:text-[20px] font-bold">
                {
                    navLinks.map((links,idx)=><Navlink key={idx} links={links} location={location}  ></Navlink>)
                }
            </div>
        </div>
    );
};

export default Header;