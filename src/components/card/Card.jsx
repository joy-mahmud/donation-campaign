import { Link } from "react-router-dom";


const Card = ({cardData}) => {
    const {id,card_bg,title,category_bg,img,title_color,category
    } = cardData
  
    const handleclick =()=>{

    }
    console.log(card_bg)
    return (
        <div style={{backgroundColor:card_bg}} className="rounded-lg">
            <img src={img} alt="" />
            <button  style={{color:title_color,backgroundColor:category_bg}} className="rounded-lg px-3 py-1 text-[14px] font-medium ml-3 mt-3 mb-3">{category}
            </button>
            <h2 style={{color:title_color}} className="text-[20px] font-semibold ml-3 mb-4">{title}</h2>
            
        </div>
    );
};

export default Card;