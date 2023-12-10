import './BankHome.css'
const BankHome = () => {
    return (
        <div className='w-full'>
            <div className='Bank_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>Journal of Finance and Bank Management</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2333-6064 (Print Version) / 2333-6072 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jfbm</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of Finance and Bank Management</span>  serves both academics and practitioners concerned with the financial
                    management of nonfinancial businesses, financial institutions, banks and public or private not-for-profit
                    organizations. The journal publishes theoretical and empirical research papers spanning all the major
                    research fields in finance and banking. It seeks to provide an outlet for the increasing flow of scholarly
                    research concerning financial institutions and the money and capital markets within which they function.
                    The Journal's emphasis is on theoretical developments and their implementation, empirical, applied,
                    and policy-oriented research in banking and other domestic and international financial institutions
                    and markets. The Journal's purpose is to improve communications between, and within, the academic and
                    other research communities and policymakers and operational decision makers at financial institutions -
                    private and public, national and international, and their regulators.
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

export default BankHome;