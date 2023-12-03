
const ResearchBox = ({researce}) => {
    const {title,subTitle,image,overview,date} = researce
    return (
        <div className="border p-4 cursor-pointer group">
            <div className="relative">
                 <img className="w-full" src={image} alt="" />
                 <div className="bottom-0 absolute py-2 px-4 bg-[#FFFFFF] text-[#04205A] font-medium text-sm">
                     <h2>{title}</h2>
                 </div>
            </div>
            <div className="py-2">
                  <h2 className="py-2 contrast-less:font-bold text-[#04205A] group-hover:text-[#91000D] duration-300">{subTitle}</h2>
                  <p className="text-[#04215abe]">
                     {
                        overview.slice(0,200)
                     }
                     ....
                  </p>

                  <p className="py-4 text-[#04205A] text-sm font-medium">Date of Completion: {date}</p>
            </div>
        </div>
    );
};

export default ResearchBox;