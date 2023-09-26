import { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import img2 from '../../assets/images/donatebg.jpg';
import Card from "../card/Card";


const Home = () => {
    const cardData = useLoaderData()
    const cardDataCopy = [...cardData]
    const [displayCard, setDisplayCard] = useState(cardData)

    const searchREf = useRef(null)

    const handleSearch = (e) => {
        e.preventDefault()
        const searchValue = searchREf.current.value
        const searchValueLower = searchValue.toLowerCase()

        if (searchValue) {
            const SearchCard = cardDataCopy.filter(item => {
                let catagoryItem = item.category
                const catagoryItemLower = catagoryItem.toLowerCase()

                if (searchValueLower === catagoryItemLower) {
                    return item
                }

            })
            setDisplayCard(SearchCard)
        } else {
            setDisplayCard(cardData)
        }


    }

    return (
        <div className="relative" >
            <div className="mb-32">
                <div className="lg:h-[500px]">
                    <img className="opacity-10 h-full w-full" src={img2} alt="" />
                </div>
                <div className=" top-[100px] text-center space-y-10 mb-12 mt-16 container mx-auto absolute ">
                    <h2 className="text-[48px] font-bold">I Grow By Helping People In Need</h2>
                    <div className="flex items-center justify-center">
                        <form onSubmit={handleSearch}>
                            <input className="lg:w-[470px] border-2 rounded-lg rounded-e-none px-3 py-2 border-e-0 outline-none" ref={searchREf} placeholder="search here..." type="text" />
                            {/* <input className="bg-[#FF444A] rounded-lg px-5rounded-s-none  text-white py-[6px]" type="submit" value="Search" /> */}
                            <button type="submit" className="bg-[#FF444A] rounded-lg px-5 rounded-s-none  text-white py-[9px]">search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 container mx-auto">
                {
                    displayCard.map(card => <Card key={card.id} cardData={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;