const Contact = () => {
    return (
        <div className="w-full my-8">
            <div className="my-8">
                <div className="bg-[#0d235616] my-6 px-8 py-4">
                    <form className="space-y-3">
                        <div className="flex flex-col space-y-1">
                            <label className="text-sm font-semibold">Your Name <sup className="text-[#8D0012] font-bold">*</sup></label>
                            <input className="px-4 py-2 border border-[#0d235761] outline-none" type="text" placeholder="Name.." />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="text-sm font-semibold">Your e-mail <sup className="text-[#8D0012] font-bold">*</sup></label>
                            <input className="px-4 py-2 border border-[#0d235761] outline-none" type="email" placeholder="Enter Email..." />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="text-sm font-semibold">Subject<sup className="text-[#8D0012] font-bold">*</sup></label>
                            <input className="px-4 py-2 border border-[#0d235761] outline-none" type="email" placeholder="Subject..." />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="text-sm font-semibold">Share Your Problem <sup className="text-[#8D0012] font-bold">*</sup></label>
                            <textarea className="px-4 py-2 border border-[#0d235761] outline-none" cols="30" rows="4" placeholder="Write here your problem..."></textarea>
                        </div>

                        <div>
                            <input className="px-12 py-2 bg-[#072159] text-[#fff] font-bold rounded hover:bg-[#91000D] duration-300 cursor-pointer" type="submit" value="Submit" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;