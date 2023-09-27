import { useState } from "react";


const SeeAllBtnl = ({donatelength,setDonateItemLength}) => {
    const[hideBtn,setHidebtn] = useState(false)

    if(donatelength<5){
        return(
            <div></div>
        )
    }
    else if (hideBtn){
        return(
            <div></div>
        )
    } 
    else{
        return (
            <div>
                <div onClick={()=>setHidebtn(true)}className="flex justify-center mt-5">
                        <button className="text-white font-semibold px-5 py-2 rounded-lg bg-[#009444]" onClick={() => setDonateItemLength(donatelength)}>See all</button>
                    </div>
            </div>
        );
    }
   
};

export default SeeAllBtnl;