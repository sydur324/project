import img from '../../../assets/img/ChemistryandBiochemistry.png'
import { IoSearchOutline } from "react-icons/io5";

const Chemistry = () => {
    return (
        <div className="my-24">
            <div className="bg-[#91000D] xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12  py-12">
                <h2 className='text-2xl font-bold text-[#fff]'>Browse journals</h2>
            </div>

            <div className="journal_box_width">
                <div className="journal_box_divided">

                    <div className="lg:w-1/4 border lg:h-[40vh]">
                        <h2 className="text-center font-bold text-xl py-4">Index</h2>

                        <div className=''>
                            <div className="px-4 py-6">
                                <h2 className="font-medium">Find Journals:</h2>
                                <div className="my-2">
                                    <select className="px-2 py-2 border outline-none w-full">
                                        <option value="">Chemistry and Biochemistry</option>
                                        <option value="">All</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-3/4'>
                        <div>
                            <div className='journal_box_upper'>
                                <div className='flex space-x-2 my-2 items-center'>
                                    <p className='text-sm font-medium text-[#8C0012]'>01-01</p>
                                    <p className='text-sm font-medium text-[#072159]'>Journal of Chemistry and Biochemistry</p>
                                </div>
                                <div className='flex border'>
                                    <input className='outline-none w-full px-4' type="text" placeholder='Search here...' />
                                    <p className='journal_box_upper_search_icon'><IoSearchOutline /></p>

                                </div>
                            </div>

                            <div className='flex flex-wrap xl:flex-nowrap gap-2 text-sm cursor-pointer'>
                                <p className='letter'>All</p>
                                <p className='letter'>A</p>
                                <p className='letter'>B</p>
                                <p className='letter'>C</p>
                                <p className='letter'>D</p>
                                <p className='letter'>E</p>
                                <p className='letter'>F</p>
                                <p className='letter'>G</p>
                                <p className='letter'>H</p>
                                <p className='letter'>I</p>
                                <p className='letter_active'>J</p>
                                <p className='letter'>K</p>
                                <p className='letter'>L</p>
                                <p className='letter'>M</p>
                                <p className='letter'>N</p>
                                <p className='letter'>O</p>
                                <p className='letter'>P</p>
                                <p className='letter'>Q</p>
                                <p className='letter'>R</p>
                                <p className='letter'>S</p>
                                <p className='letter'>T</p>
                                <p className='letter'>U</p>
                                <p className='letter'>V</p>
                                <p className='letter'>W</p>
                                <p className='letter'>...</p>
                            </div>
                        </div>

                        <div className='journal_box'>
                            <div className='lg:w-1/4'> <img className='' src={img} alt="" /></div>
                            <div className='lg:w-2/3'>
                                <h2 className='journal_box_title'>Journal of Chemistry and Biochemistry</h2>
                                <div className='py-2'>
                                    <p className='font-medium text-[#91000cae]'>Editor-in-Chief:</p>
                                    <p>Dr. Linda Gao, Department of Chemistry, University of Mary Hardin-Baylor, USA.</p>
                                </div>
                                <div className='py-2'>
                                    <p className='font-medium text-[#91000cae]'>ISSN:</p>
                                    <p> 2374-2712 (Print Version) /  2374-2720 (Electronic Version)</p>
                                </div>
                                <p>
                                    Journal of Chemistry and Biochemistry is a peer-reviewed international journal published
                                    by American
                                    Research Institute for Policy Development. The Journal brings together
                                    multidisciplinary
                                    interests in one journal and is to disseminate information on all aspects.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Chemistry;