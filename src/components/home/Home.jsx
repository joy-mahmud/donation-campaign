import { useLoaderData } from "react-router-dom";
import Card from "../card/Card";


const Home = () => {
    const cardData = useLoaderData()
    console.log(cardData)
    return (
        <div className="container mx-auto" >
            <div className="text-center space-y-10 mb-12 mt-16">
                <h2 className="text-[48px] font-bold">I Grow By Helping People In Need</h2>
                <div className="flex items-center justify-center">
                    <input className="  lg:w-[470px] border-2 rounded-lg rounded-e-none px-2 py-1 border-e-0" placeholder="search here..." type="text" />
                    <button className="bg-[#FF444A] rounded-lg px-5 rounded-s-none  text-white py-[6px]">search</button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {
                    cardData.map(card => <Card key={card.id} cardData={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;