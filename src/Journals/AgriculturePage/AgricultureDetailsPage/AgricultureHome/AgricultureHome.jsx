import './AgricultureHome.css'
const AgricultureHome = () => {
    return (
        <div className='w-full'>
            <div className='Agriculture_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>Journal of Agriculture and Environmental Sciences</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2334-2404 (Print Version) / 2334-2412 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jaes</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of Agriculture and Environmental Sciences</span>  is a refereed international journal.
                    The journal publishes papers concerned with the advance of agriculture and environmental science throughout
                    the world. It publishes original scientific work related to strategic and applied studies in all aspects
                    of agricultural science as well as reviews of scientific topics of current agricultural relevance.
                    All manuscripts are initially screened on their topic suitability and linguistic quality.
                    The journal is also devoted to publish original, peer-reviewed research papers on main aspects of
                    environmental sciences
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

export default AgricultureHome;