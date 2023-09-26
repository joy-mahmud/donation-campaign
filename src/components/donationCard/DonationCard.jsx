import { Link } from "react-router-dom";


const DonationCard = ({ donations }) => {
    const { id, card_bg, title, category_bg, img_d, title_color, category,price } = donations
    return (
        <div style={{ backgroundColor: card_bg }} className="rounded-lg flex ">

            <img src={img_d} alt="" />
            <div className="ml-3 ">
                <button style={{ color: title_color, backgroundColor: category_bg }} className="rounded-lg px-3 py-1 text-[14px] font-medium mt-3 mb-3">{category}
                </button>
                <h2 className="text-[20px] font-semibold mb-3">{title}</h2>
                <p style={{ color: title_color}} className="mb-4">{`$${price}`}</p>
                <Link to={`/donation_details/${id}`}><button style={{ color:'white', backgroundColor:title_color }} className="px-4 py-2 rounded-lg">Show details</button></Link>

            </div>
        </div>
    );
};

export default DonationCard;