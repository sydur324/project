import faqes from '../../../../public/faq.json'

const Questions = () => {
    return (
        <div className="w-full my-8">
            <h2 className="text-xl font-bold text-[#072159] aimsscope">Frequently Asked Questions (FAQs)</h2>

            <div className="my-8">
                <div className="space-y-3">
                    {
                        faqes.map(faq => <div key={faq.is} className="space-y-2">
                        <div className="py-2 px-4 border relative group cursor-pointer">
                            <p className="bg-[#91000D] group-hover:bg-[#072159] duration-300 text-[#fff] px-2 py-2 font-semibold inline-block absolute top-0 left-0">{faq.id}</p>
                            <h2 className="px-8 group-hover:text-[#91000D] duration-300">{faq.quesition}</h2>
                        </div>
                        <div className="border my-2 px-4 py-4">
                            <p className="text-[#262626e2]">
                                {faq.ans}
                            </p>
                        </div>
                    </div>)
                    }

                    
                </div>
            </div>
        </div>
    );
};

export default Questions;