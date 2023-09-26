import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { getDonateItems } from "../../utility/localstorage";

const Statistics = () => {
    const [myDonationPercentage,setDonationPercentage ] = useState(0)
    // const [totalDoantionPercentage,setTotaDonationPercentage] =useState()
    const totalDoantion = 12
    let totalDoantionPercentage = 100- myDonationPercentage
    // totalDoantionPercentage = totalDoantionPercentage.toFixed(1)

    console.log(myDonationPercentage)
    
    useEffect(()=>{
        const myDonation = getDonateItems()
        const mydonationLength = myDonation.length 
        const donationPercentage = (mydonationLength/totalDoantion)*100
        setDonationPercentage(donationPercentage)
    },[])
    
   
    return (
        <div>
            
            <Chart
                type='pie'
                width={1349}
                height={550}
                series={[totalDoantionPercentage,myDonationPercentage]}
                options={{labels:['Total donations','Your donations']}}
            ></Chart>
        </div>
    );
};

export default Statistics;