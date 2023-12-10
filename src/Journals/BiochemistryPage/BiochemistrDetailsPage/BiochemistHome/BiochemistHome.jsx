import './BiochemistHome.css'
const BiochemistHome = () => {
    return (
        <div className='w-full'>
            <div className='Biochemist_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>Journal of Chemistry and Biochemistry</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2374-2712 (Print Version) / 2374-2720 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jcb</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of Chemistry and Biochemistry</span>  is a peer-reviewed international journal
                    published by American Research Institute for Policy Development. The Journal brings together
                    multidisciplinary interests in one journal and is to disseminate information on all aspects of
                    research and development in chemistry as well as biochemistry. Contributions in the form of
                    research articles and short communications are considered for publication. It is devoted to
                    the publication of contributions in all fields of experimental and applied researches of chemistry.
                    The editors welcome original contributions that have not been published and are not under consideration
                    elsewhere. Papers accepted for publication are double-blind refereed to ensure academic integrity.
                </p>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>E-Publication First<sup>TM</sup></h2>
                    <p>
                        E-Publication FirstTM is a feature offered through our journal platform. It allows PDF version of
                        manuscripts that have been peer reviewed and accepted, to be hosted online prior to their inclusion
                        in a final printed journal.
                        Readers can freely access or cite the article. The accepted papers are published online within
                        one week after the completion of all necessary publishing steps.
                    </p>
                </div>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>International Journal of Accounting and Taxation</span> is assigned a DOI®number,
                        which appears beneath the author's affiliation in the published paper. Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.doi.org/' target='_blank'>https://www.doi.org/</a> to know what
                        is DOI (Digital Object Identifier)? Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.crossref.org/'>https://www.crossref.org/</a> to retrieve Digital Object Identifiers
                        (DOIs) for journal articles, books, and chapters.
                    </p>
                </div>

                <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Abstracted/Indexed in:</h2>
                    <p>
                        CrossRef, CrossCheck, Cabell's, Ulrich's, Griffith Research Online, Google Scholar, Education.edu,
                        Informatics, Universe Digital Library, Standard Periodical Directory,Gale, Open J-Gate, EBSCO, Journal
                        Seek, DRJI, ProQuest, BASE, InfoBase Index, OCLC, IBSS, Academic Journal Databases, Scientific Index.
                    </p>
                </div>

                <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>

                </div>
            </div>
        </div>
    );
};

export default BiochemistHome;