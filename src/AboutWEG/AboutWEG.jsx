
import './AboutWEG.css'
import aboutListes from '../../public/about.json'
const AboutWEG = () => {
    return (
        <div className="xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-8 my-14">
            <div className="about-bg py-12 xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12">
                <h2 className='text-xl font-bold text-[#91000D]'>About WEG</h2>
            </div>

            <div className='my-8'>
                <h2 className="text-xl font-bold text-[#072159] aimsscope">History of the Institute</h2>

                <div className='my-8 space-y-3'>
                    <p>
                        Founded in June 2011, the ARIPD serves as a focal point for academicians,
                        professionals, graduate and undergraduate students, fellows, and associates
                        pursuing research throughout the world. Initially ARIPD’s activities were based in Bangladesh.
                        Later its scope has been broadened to the world at large through its U.S. International Center.
                    </p>

                    <p>
                        The Institute works with policymakers, scholars, and public interest groups around the World to design,
                        execute, and disseminate research that illuminates economics and social policy issues affecting the
                        communities of the world. ARIPD seeks to build a network of individuals and organizations that
                        conduct and use policy research. As an independent, non-profit, research organization,
                        ARIPD also works in affiliation with American Association of International Researchers (AAIR).
                    </p>

                    <p>
                        ARIPD's work is supported by foundation grants, government grants and contracts,
                        donations from individuals, and contributions from organizations. Members and affiliates of ARIPD's
                        Information Network receive reports and information on a regular basis. ARIPD is a 501(c) (3)
                        tax-exempt organization.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-[#072159] aimsscope">Key Activities of the Institute</h2>
                    <p className='text-[#91000D] py-8'>The core activities of ARIPD include but not limited to the following:</p>
                    <div>
                        <div className='space-y-2'>
                            {
                                aboutListes.map(aboutListe => <div key={aboutListe.id}>
                                    <p className='flex items-baseline space-x-2'><span>{aboutListe.id}:</span><span>{aboutListe.text}</span></p>
                                </div>)
                            }
                        </div>
                        <p className='my-3 text-[#072159]'>
                            The Institute supports and patronizes the functions of AAIR.
                            AAIR has already more than 2000 members from more than 150 countries.
                            AAIR receives 10 membership applications daily on an average from the academicians and
                            researchers around the world. The membership is completely free of charge.
                            The Institute has two diversified global research centers formed to unleash
                            the core research in specific field: Center for Global Academic Research & Center for Policy Analysis.
                        </p>
                    </div>
                </div>

                <div className='my-2'>
                    <h2 className="text-xl font-bold text-[#072159] aimsscope">Vision, Mission & Values</h2>

                    <div className='my-8 space-y-2'>
                        <p>
                            The ARIPD’s vision is to provide international leadership in generating and disseminating the
                            latest research findings through a comprehensive blending of academic and institutional research.
                            It promotes excellence and innovation in
                            interdisciplinary scientific research, public policy initiatives, and education of the public.
                        </p>

                        <p>
                            The Institute's mission is to support and advance the research activities around the world.
                        </p>

                        <p>
                            The core values of ARIPD include commitment, innovation,
                            flexibility, diversity, timeliness, zero discrimination,
                            quality in every step and global thinking.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutWEG;