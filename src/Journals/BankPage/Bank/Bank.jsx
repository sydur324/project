import { Link } from 'react-router-dom';
import img from '../../../assets/img/BankManagement.png'
import { IoSearchOutline } from "react-icons/io5";

const Bank = () => {
    return (
        <div className="my-24">
            <div className="bg-[#91000D] xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12  py-12">
                <h2 className='text-2xl font-bold text-[#fff]'>Browse journals</h2>
            </div>

            <div className=" xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 my-12">
                <div className="flex flex-wrap lg:flex-nowrap lg:gap-8 gap-6">

                    <div className="lg:w-1/4 border lg:h-[40vh]">
                        <h2 className="text-center font-bold text-xl py-4">Index</h2>

                        <div className=''>
                            <div className="px-4 py-6">
                                <h2 className="font-medium">Find Journals:</h2>
                                <div className="my-2">
                                    <select className="px-2 py-2 border outline-none w-full">
                                        <option value="">Finance and Bank Management</option>
                                        <option value="">All</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-3/4'>
                        <div>
                            <div className='flex flex-wrap xl:flex-nowrap lg:flex-nowrap items-center justify-between my-4'>
                                <div className='flex space-x-2 my-2 items-center'>
                                    <p className='text-sm font-medium text-[#8C0012]'>01-01</p>
                                    <p className='text-sm font-medium text-[#072159]'>Journal of Finance and Bank Management</p>
                                </div>
                                <div className='flex border'>
                                    <input className='outline-none w-full px-4' type="text" placeholder='Search here...' />
                                    <p className='bg-[#91000D] py-2 border border-[#91000D] px-3 text-white text-xl'><IoSearchOutline /></p>

                                </div>
                            </div>

                            <div className='flex flex-wrap xl:flex-nowrap gap-2 text-sm cursor-pointer'>
                                <p className='py-1 px-2 hover:bg-[#91000D] border font-semibold hover:text-[#fff]'>All</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>A</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>B</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>C</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>D</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>E</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>F</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>G</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>H</p>
                                <p className='py-1 px-2 border bg-[#91000D] duration-300 cursor-pointer text-white'>I</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>J</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>K</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>L</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>M</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>N</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>O</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>P</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>Q</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>R</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>S</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>T</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>U</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>V</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>W</p>
                                <p className='py-1 px-2 border hover:bg-[#91000D] duration-300 cursor-pointer hover:text-[#fff]'>...</p>
                            </div>
                        </div>

                        <Link to='/BankPage'>
                            <div className='my-4 border-2 p-8 flex flex-wrap xl:flex-nowrap gap-4 cursor-pointer hover:shadow-md'>
                                <div className='lg:w-1/4'> <img className='' src={img} alt="" /></div>
                                <div className='lg:w-2/3'>
                                    <h2 className='font-medium text-[#072159] xl:text-xl lg:text-xl md:text-xl text-lg '>Journal of Finance and Bank Management</h2>
                                    <div className='py-2'>
                                        <p className='font-medium text-[#91000cae]'>Editor-in-Chief:</p>
                                        <p>Dr. Donald Furman, State University of New York System, USA..</p>
                                    </div>
                                    <div className='py-2'>
                                        <p className='font-medium text-[#91000cae]'>ISSN:</p>
                                        <p> 2333-6064 (Print Version) /  2333-6072 (Electronic Version)</p>
                                    </div>
                                    <p>
                                        Journal of Finance and Bank Management serves both academics and practitioners
                                        concerned with the financial management of nonfinancial businesses, financial
                                        institutions, banks and public or private not-for-profit organizations.
                                        The journal publishes theoretical
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Bank;