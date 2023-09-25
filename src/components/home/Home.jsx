

const Home = () => {
    return (
        <div className="text-center space-y-10 mt-16">
           <h2 className="text-[48px] font-bold">I Grow By Helping People In Need</h2> 
           <div className="flex items-center justify-center">
            <input className="  lg:w-[470px] border-2 rounded-lg rounded-e-none px-2 py-1 border-e-0"  placeholder="search here..." type="text" />
            <button className="bg-[#FF444A] rounded-lg px-5 rounded-s-none  text-white py-[6px]">search</button>
           </div>
        </div>
    );
};

export default Home;