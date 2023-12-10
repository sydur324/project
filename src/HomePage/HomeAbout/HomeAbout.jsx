import { Link } from 'react-router-dom';
import firstImg from '../../assets/img/abouthome01.jpg'
import secondImg from '../../assets/img/abouthome02.jpg'
const HomeAbout = () => {
    return (
        <div className='xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-8'>
            <div className="grid lg:grid-cols-2 lg:gap-8 gap-4">

                <div>
                    <div>
                        <img src={firstImg} alt="" />

                    </div>
                    <div className='lg:mx-12 mt-[-12vh] relative z-10'>
                        <h2 className='bg-[#fff] py-2 px-8 inline-block  font-bold text-[#072159]'>who we are</h2>
                        <div className='bg-[#072159]'>
                            <div className='text-[#fff] px-8 py-4'>
                                <p className='text-sm font-bold text-[#91000D]'>We are</p>
                                <h2 className='font-medium py-2'>Westren Education Group of Journals</h2>
                                <p className='text-sm text-[#ffffffc4]'>
                                    Westren Education Group of Researchers (WEG)
                                    was established in 2023 by a small group interested in research and publication.
                                </p>

                                <Link to='/aboutWEG'>
                                    <button className='my-4 text-[#91000D] text-sm font-bold py-2 px-4 border 
                                border-[#91000D] rounded hover:bg-[#91000D] hover:text-[#fff] duration-300 cursor-pointer'>
                                        Find Out More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <img src={secondImg} alt="" />
                    </div>

                    <div className='lg:mx-12 mt-[-12vh] relative z-10'>
                        <h2 className='bg-[#fff] py-2 px-8 inline-block  font-bold text-[#072159]'>History of WEG</h2>
                        <div className='bg-[#072159]'>
                            <div className='text-[#fff] px-8 py-4'>
                                <p className='text-sm font-bold text-[#91000D]'>History</p>
                                <h2 className='font-medium py-2'>Westren Education Group of Journals</h2>
                                <p className='text-sm text-[#ffffffc4]'>
                                    Founded in June 2023, the WEG serves as a focal point for academicians,
                                    professionals, graduate and undergraduate students..
                                </p>

                                <Link to='/aboutWEG'>
                                    <button className='my-4 text-[#91000D] text-sm font-bold py-2 px-4 border 
                                border-[#91000D] rounded hover:bg-[#91000D] hover:text-[#fff] duration-300 cursor-pointer'>
                                        Find Out More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeAbout;