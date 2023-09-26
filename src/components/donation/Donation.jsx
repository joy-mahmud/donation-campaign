import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonateItems } from "../../utility/localstorage";
import DonationCard from "../donationCard/DonationCard";


const Donation = () => {
    const donationData = useLoaderData()
    const [donated, setDonated] = useState([])
    const [donateItemLength, setDonateItemLength] = useState(4)
    console.log(donated)
    useEffect(() => {
        const donations = getDonateItems()
        if (donationData.length > 0) {
            const donationItems = donationData.filter(items => donations.includes(items.id))
            setDonated(donationItems)
        }

    }, [donationData])

    return (
        <div className="container mx-auto mt-12 mb-10">
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-3">
            {
                donated.slice(0, donateItemLength).map(item => <DonationCard key={item.id} donations={item}></DonationCard>)
            }
            </div>
            
            <div className={donateItemLength === donated.length ? 'hidden' : ''}>
                <div className="flex justify-center mt-5">
                    <button className="text-white font-semibold px-5 py-2 rounded-lg bg-[#009444]" onClick={() => setDonateItemLength(donated.length)}>See all</button>
                </div>
            </div>
        </div>
    );
};

export default Donation;