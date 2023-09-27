import { useEffect, useState, } from 'react';
import Chart from 'react-apexcharts'
import { getDonateItems } from "../../utility/localstorage";

const Statistics = () => {
    const [myDonationPercentage, setDonationPercentage] = useState(0)
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    let pieWidth = dimensions.width
    let piewheight = dimensions.height 
    // const [totalDoantionPercentage,setTotaDonationPercentage] =useState()
    const totalDoantion = 12
    let totalDoantionPercentage = 100 - myDonationPercentage
    // totalDoantionPercentage = totalDoantionPercentage.toFixed(1)
    // console.log(w,h)

    // console.log(myDonationPercentage)

    useEffect(() => {
        const myDonation = getDonateItems()
        const mydonationLength = myDonation.length
        const donationPercentage = (mydonationLength / totalDoantion) * 100
        setDonationPercentage(donationPercentage)

        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)

    }, [])

    


    return (
        <div className='mt-10'>

            <Chart
                type='pie'
                width={pieWidth-100}
                height={piewheight-100}
                series={[totalDoantionPercentage, myDonationPercentage]}
                 options={{ labels: ['total donation', 'your donatiion'] }}
            ></Chart>
        </div>
    );
};

export default Statistics;