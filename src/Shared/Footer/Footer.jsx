import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <div>
            <div className="xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-12 bg-[#04205A]">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-12">

                    <div className="text-[#fff] space-y-2">
                        <div className="py-4">
                            <h2 className="font-medium tracking-wider  py-4">WESTREN EDUCATION GROUP</h2>
                            <p className="text-sm">22 No House,02 No Road, Mirpur-1</p>
                            <p className="text-sm">Dhaka, Bangladesh</p>
                        </div>

                        <div>
                            <p className="font-medium tracking-wider text-sm py-1">PHONE</p>
                            <p className="text-sm text-[#ffffffb1] hover:text-[#91000D] cursor-pointer duration-300">+880164628**</p>
                        </div>

                        <div>
                            <p className="font-medium tracking-wider text-sm py-1">INTERNATIONAL</p>
                            <p className="text-sm text-[#ffffffb1] hover:text-[#91000D] cursor-pointer duration-300">+88016462866**</p>
                        </div>

                        <div>
                            <p className="font-medium tracking-wider text-sm py-1">EMAIL</p>
                            <p className="text-sm text-[#ffffffb1] hover:text-[#91000D] cursor-pointer duration-300">weg12@gmail.com</p>
                        </div>
                    </div>

                    <div className="py-4 text-[#fff]">
                        <h2 className="font-medium tracking-wider  py-4">INFORMATION FOR</h2>

                        <div className="text-sm space-y-2 text-[#ffffffb1] cursor-pointer">
                            <p className="hover:text-[#91000D] cursor-pointer duration-300">E-Publication First<sup>TM</sup></p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300">Plagiarism Policy</p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300">Copyright Policy</p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300">Review Policy</p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300">Research Guidelines</p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300">Publication Plan</p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300">Journals</p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300">Global Team</p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300">Contact</p>
                        </div>
                    </div>

                    <div></div>

                    <div className="text-[#fff]">
                        <h2 className="font-medium tracking-wider  py-4">CONNECT</h2>

                        <div className="flex space-x-2 cursor-pointer">
                            <p className="px-2 py-2 border hover:bg-[#91000D] duration-300 hover:border-transparent hover:rounded"><FaFacebookF /></p>
                            <p className="px-2 py-2 border hover:bg-[#91000D] duration-300 hover:border-transparent hover:rounded"><FaTwitter /></p>
                            <p className="px-2 py-2 border hover:bg-[#91000D] duration-300 hover:border-transparent hover:rounded"><FaLinkedinIn /></p>
                            <p className="px-2 py-2 border hover:bg-[#91000D] duration-300 hover:border-transparent hover:rounded"><FaInstagram /></p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-[#950007] py-4 xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12">
                <div className="flex lg:items-center flex-wrap lg:gap-12 gap-4 text-center">
                    <div className="flex items-center text-[#fff] text-sm space-x-1">
                        <p><AiOutlineCopyrightCircle /></p>
                        <p>2019 Westren Education Group. All Rights Reserved.</p>
                    </div>

                    <div className="flex items-center flex-wrap text-center justify-center space-x-8 text-sm text-[#ffffff86] cursor-pointer font-medium">
                         <p className="hover:text-[#072159] duration-300">Accessibility </p>
                         <p className="hover:text-[#072159] duration-300">Legal</p>
                         <p className="hover:text-[#072159] duration-300">Privacy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;