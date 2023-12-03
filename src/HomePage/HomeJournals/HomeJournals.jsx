import './HomeJournals.css'
import music from '../../assets/img/music.jpg'
import art from '../../assets/img/art.jpg'
import science from '../../assets/img/science.jpeg'
import hospital from '../../assets/img/hospital.jpg'

const HomeJournals = () => {
    return (
        <div className='xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-8'>
            <div>
                <h2 className='text-base font-bold text-[#91000D]'>Our Journals</h2>
                <p className='py-2 text-[#262626b7]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum vel assumenda quod, <br></br>quos aliquam distinctio dicta sequi exercitationem
                    natus non error expedita<br></br> ab fugit quasi nemo asperiores. Architecto,
                    porro commodi!
                </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-4 my-4 cursor-pointer'>

                <div className='text-center group'>
                    <div className='overflow-hidden'>
                        <img className='group-hover:scale-105 duration-500' src={music} alt="" />
                    </div>
                    <div className='py-4'>
                        <p className='text-[#91000D] font-medium'>Music & Arts</p>
                        <h2 className='text-[#04205A] font-bold py-1 music-title'>INTERNATIONAL JOURNAL OF MUSIC AND PERFORMING ARTS</h2>
                    </div>
                </div>

                <div className='grid lg:grid-cols-2 gap-4'>

                    <div className='border p-6 flex flex-col justify-center items-center text-center group'>
                        <div className='overflow-hidden'>
                            <img className='group-hover:scale-105 duration-500' src={science} alt="" />
                        </div>
                        <div className='py-4'>
                            <p className='text-[#91000D] font-medium'> Science and Technology</p>
                            <h2 className='text-[#04205A] font-bold py-1 music-title'>JOURNAL OF COMPUTER SCIENCE AND INFORMATION TECHNOLOGY</h2>
                        </div>
                    </div>

                    <div className='border p-6 flex flex-col justify-center items-center text-center group'>
                        <div className='overflow-hidden'>
                            <img className='group-hover:scale-105 duration-500' src={art} alt="" />
                        </div>
                        <div className='py-4'>
                            <p className='text-[#91000D] font-medium'>Art and Art History</p>
                            <h2 className='text-[#04205A] font-bold py-1 music-title'>INTERNATIONAL JOURNAL OF ART AND ART HISTORY</h2>
                        </div>
                    </div>

                    <div className='border p-6 flex flex-col justify-center items-center text-center group'>
                        <div className='overflow-hidden'>
                            <img className='group-hover:scale-105 duration-500' src={hospital} alt="" />
                        </div>
                        <div className='py-4'>
                            <p className='text-[#91000D] font-medium'>Medicine and Pharmacy</p>
                            <h2 className='text-[#04205A] font-bold py-1 music-title'>INTERNATIONAL JOURNAL OF MEDICINE AND PHARMACY</h2>
                        </div>
                    </div>

                    <div className='border p-6 flex flex-col justify-center items-center text-center group'>
                        <div className='overflow-hidden'>
                            <img className='group-hover:scale-105 duration-500' src={music} alt="" />
                        </div>
                        <div className='py-4'>
                            <p className='text-[#91000D] font-medium'>Engineering & Architecture</p>
                            <h2 className='text-[#04205A] font-bold py-1 music-title'>JOURNAL OF ENGINEERING AND ARCHITECTURE</h2>
                        </div>
                    </div>

                    <div>
                         <h2 className='font-bold text-[#91000D] hover:text-[#04205A] duration-300 cursor-pointer'>Browser more Journals</h2>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HomeJournals;