import guildelines from '../../../public/researchGuidelines.json'

const ResearchGuidelines = () => {
    return (
        <div className="my-6">
            <h2 className=" text-lg font-bold text-[#0D2357] aimsscope">15 Steps to Good Research</h2>

            <div className="my-8">
                <div className='space-y-3'>
                    {
                        guildelines.map(guildeline => <div key={guildeline.id}>
                            <div className=" px-14 py-2 border flex items-center group cursor-pointer  relative">
                                <p className="leading-10 group-hover:bg-[#0D2357] duration-300 px-4 font-semibold h-full text-center top-0 bg-[#8D0012] text-white absolute left-0">{guildeline.id}</p>
                                <p className="font-medium text-[#262626ee]">{guildeline.guideline}</p>
                            </div>
                        </div>)
                    }
                </div>


            </div>
        </div>
    );
};

export default ResearchGuidelines;