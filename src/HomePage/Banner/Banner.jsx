
import './Banner.css'
import { FiSearch } from "react-icons/fi";

const Banner = () => {
    return (
        <div className='mt-24'>
            <div className='banner-bg xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-20'>
                <h2 className='text-white font-bold py-2 text-xl uppercase'>Westren Education Group</h2>
                <p className='text-[#ffffffb2]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid, distinctio. <br></br>Tenetur pariatur mollitia optio non quae porro,
                    similique doloribus a repudiandae, <br></br>dolores consectetur cum nobis voluptatum!
                    Tempore nobis animi libero.
                </p>
                <div className='flex items-center justify-between  border lg:w-2/3 rounded my-8'>
                      <input className='bg-transparent border-transparent outline-none placeholder:text-[#fff] text-white  px-4 w-full' type="text" placeholder='Enter Subject, Title,Author,Keyword..' />
                      <p className=' px-4 border-l-[1px] text-xl text-[#fff] h-full py-2 cursor-pointer bg-[#ffffff3a]'><FiSearch /></p>
                </div>
            </div>
        </div>
    );
};

export default Banner;