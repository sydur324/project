import completedListes from '../../../../public/completedList.json'

const CallForPapers = () => {
    return (
        <div className="my-8">
            <h2 className="font-bold text-[#0D2357] aimsscope">Call for Papers</h2>
            <div className="my-6 text-[#262626e2] space-y-3">
                <p>
                    Founded in June 2011, the <span className="text-[#91000D] hover:text-[#0D2357] duration-300 cursor-pointer">American Research Institute for Policy
                        Development</span> serves as a focal point for academicians, professionals,
                    graduate and undergraduate students,
                    fellows, and associates pursuing research throughout the world.
                </p>

                <p>
                    The Institute works with policymakers, scholars, and public interest groups around the World to
                    design, execute, and disseminate research that illuminates economics and social policy issues
                    affecting the communities of the world. ARIPD seeks to build a network of individuals and
                    organizations that conduct and use policy research. As an independent, non-profit, research
                    organization, ARIPD also works in affiliation with <span className="text-[#91000D] hover:text-[#0D2357] duration-300 cursor-pointer"> American Association of International
                        Researchers (AAIR)</span>. Visit <span className="text-[#91000D] hover:text-[#0D2357] duration-300 cursor-pointer">www.aripd.net</span> to know more about the INSTITUTE.
                </p>

                <p>
                    The INSTITUTE publishes the research papers through a number of international
                    journals (all the journals are published in print and online).
                    These journals are led by the world’s reputed professors.
                    The quick and double blind review process, rich editorial board,
                    zero tolerance for plagiarism and high respect for publication ethics,
                    a strong commitment for scheduled publication are the key features of the Institute’s journals.
                </p>

                <p>
                    The INSTITUTE calls for research papers, review papers, conceptual framework,
                    analytical and simulation models, case studies, empirical research, technical notes,
                    and book reviews for the coming issue of the journals.
                    (The list of the journal is attached at the end of the letter).
                </p>


                <p>
                    The interested contributors are highly encouraged to submit their manuscripts/papers to the
                    executive editor as attachment at <span className="text-[#91000D] hover:text-[#0D2357] duration-300 cursor-pointer">editor@aripd.net</span> or <span className="text-[#91000D] hover:text-[#0D2357] duration-300 cursor-pointer">submission.aripd@gmail.com</span> As the
                    INSTITUTE follows the central submission policy (same submission e-mail for every journal),
                    the contributors/authors are requested to indicate the name of the journal in the cover letter
                    in which they are interested to publish. If a contributor is not sure about the suitability of
                    her/his paper for a specific journal, she/he should send the paper to the executive editor at
                    editor@aripd.net , the executive editor will decide the journal for her/his paper.
                </p>

                <h2 className="font-bold text-[#0D2357] aimsscope">The complete list of the journals</h2>
            </div>

            <div className="my-8">
                <div className="w-full">
                    <table className="space-y-4 w-full">
                        <thead className="w-full">
                            <tr className="border text-center w-full text-sm">
                                <th className="border px-10 py-2">Field</th>
                                <th className="border px-10 py-2">Journal</th>
                                <th className="border px-10 py-2">Submission Deadline</th>
                                <th className="border px-10 py-2">Publication Date</th>
                                <th className="border px-10 py-2">Volume & Issue</th>
                            </tr>
                        </thead>
                        <tbody className=" w-full text-sm border my-4">
                            {
                                completedListes.map(completedList => <tr key={completedList.id} className=" my-4">
                                <td className="border px-10 py-2">{completedList.field}</td>
                                <td className="border px-2 text-[#91000D] cursor-pointer hover:text-[#072159] duration-300">{completedList.journal}</td>
                                <td className="border px-2">{completedList.submissionDeadline}</td>
                                <td className="border px-2">{completedList.publicationDate}</td>
                                <td className="border px-2">{completedList.volumeIssue}</td>
                            </tr>)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default CallForPapers;