import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonateItems } from "../../utility/localstorage";
import DonationCard from "../donationCard/DonationCard";
import SeeAllBtnl from "../seeAllBtn/SeeAllBtnl";


const Donation = () => {
    const donationData = useLoaderData()
    const [donated, setDonated] = useState([])
    const [donateItemLength, setDonateItemLength] = useState(4)
    const [seeAll, setSeeAll] = useState('hidden')
    console.log(donated.length)
    useEffect(() => {
        const donations = getDonateItems()
        if (donationData.length > 0) {
            const donationItems = donationData.filter(items => donations.includes(items.id))
            setDonated(donationItems)
        }
        if (donated.length >4) {
            setSeeAll('')
        }

    }, [])

    return (
        <div className="container mx-auto mt-12 mb-10">
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-3 mx-2">
                {
                    donated.slice(0, donateItemLength).map(item => <DonationCard key={item.id} donations={item}></DonationCard>)
                }
            </div>
                <SeeAllBtnl donatelength={donated.length} setDonateItemLength={setDonateItemLength}></SeeAllBtnl>
        
        </div>
    );
};

export default Donation;