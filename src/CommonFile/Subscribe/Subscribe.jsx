const Subscribe = () => {
    return (
        <div className="w-full my-8">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Subscription</h2>
            <div className="my-8">
                <div className="space-y-2">
                    <p>There is no subscription fee for online access of the journal. The journal follows open access policy.</p>
                    <p>For subscription details (print copy only), please write to the executive editor at <span>editor@aripd.net</span></p>
                </div>

                <div className="my-2">
                    <h2 className="font-bold text-[#91000D] aimsscope">Type of Subscription</h2>
                    <div className="grid  lg:grid-cols-1 md:grid-cols-2  gap-4 my-8 cursor-pointer">

                        <div className="py-2 px-4 border relative group">
                            <p className="bg-[#91000D] group-hover:bg-[#072159] duration-300 text-[#fff] px-2 py-2 font-semibold inline-block absolute top-0 left-0">$ 60</p>
                            <h2 className="px-10 group-hover:text-[#91000D] duration-300">Library/Institution Government/Association </h2>
                        </div>

                        <div className="py-2 px-4 border relative group"> 
                        <p className="bg-[#91000D] group-hover:bg-[#072159] duration-300 text-[#fff] px-2 py-2 font-semibold inline-block absolute top-0 left-0">$ 50</p>
                            <h2 className="px-10 group-hover:text-[#91000D] duration-300">PhD/M.Phil  Candidates/Graduate Students </h2>
                        </div>

                        <div className="py-2 px-4 border relative group">
                        <p className="bg-[#91000D] group-hover:bg-[#072159] duration-300 text-[#fff] px-2 py-2 font-semibold inline-block absolute top-0 left-0">$ 45</p>
                            <h2 className="px-10 group-hover:text-[#91000D] duration-300">WEG Members </h2>
                        </div>

                        <div className="py-2 px-4 border relative group">
                        <p className="bg-[#91000D] group-hover:bg-[#072159] duration-300 text-[#fff] px-2 py-2 font-semibold inline-block absolute top-0 left-0">$ 45</p>
                            <h2 className="px-10 group-hover:text-[#91000D] duration-300">Authors of the Journal</h2>
                        </div>

                        <div className="py-2 px-4 border relative group">
                        <p className="bg-[#91000D] group-hover:bg-[#072159] duration-300 text-[#fff] px-2 py-2 font-semibold inline-block absolute top-0 left-0">$ 30</p>
                            <h2 className="px-10 group-hover:text-[#91000D] duration-300">Single Issue Price</h2>
                        </div>

                        <div className="py-2 px-4 border relative group">
                        <p className="bg-[#91000D] group-hover:bg-[#072159] duration-300 text-[#fff] px-2 py-2 font-semibold inline-block absolute top-0 left-0">Lead Time</p>
                            <h2 className="px-24 group-hover:text-[#91000D] duration-300"> 3-4 weeks</h2>
                        </div>

                        <div className="py-2 px-4 border relative group">
                        <p className="bg-[#91000D] group-hover:bg-[#072159] duration-300 text-[#fff] px-2 py-2 font-semibold inline-block absolute top-0 left-0">Yes</p>
                            <h2 className="px-10 group-hover:text-[#91000D] duration-300">Back Issues Availability</h2>
                        </div>

                        <div className="py-2 px-4 border relative group">
                        <p className="bg-[#91000D] group-hover:bg-[#072159] duration-300 text-[#fff] px-2 py-2 font-semibold inline-block absolute top-0 left-0">Method of Payment</p>
                            <h2 className="px-40 group-hover:text-[#91000D] duration-300">Bank Transfer/Western Union</h2>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Subscribe;