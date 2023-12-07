const Information = () => {
    return (
        <div>
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Information</h2>

            <div className="my-8">
                <div>
                    <h2 className="text-[#0A2258] text-lg font-medium">Information for Reviewers</h2>
                    <p className="text-[#91000D] pt-2">Don't forget about the purpose of Peer Review</p>
                    <p className="py-1 text-[#262626e2]">
                        Thank you for the effort and expertise that you contribute to reviewing,
                        without which it would be impossible to maintain the high standards of
                        peer-reviewed journals.
                    </p>
                </div>

                <div>
                    <h2 className="text-[#0A2258] text-lg font-medium py-2">Conduct the Review with utmost sincerity</h2>
                    <div className="text-[#262626e2] space-y-3">
                        <p>
                            Reviewing needs to be conducted confidentially,
                            the article you have been asked to review should not be disclosed to a third party.
                            If you wish to elicit an opinion from colleagues or students regarding the article
                            you should let the editor know beforehand. Most editors welcome additional
                            comments, but whoever else is involved will also need to keep the review
                            process confidential. Although journal practices vary, most journals do not
                            share the identity of the reviewer with the author. To help us protect your
                            identity, please do not reveal your name within the text of your review.
                            Be aware when you submit your review that any recommendations
                            you make will contribute to the final decision made by the editor.
                        </p>

                        <p>
                            Depending upon the journal, you will be asked to evaluate the article on a
                            number of criteria. Some journals provide detailed guidance others do not,
                            but normally you would be expected to evaluate the article according to originality,
                            structure, previous research and ethical issues.
                        </p>
                    </div>
                </div>

                <div className="my-3">
                    <h2 className="text-[#91000D] text-lg font-medium py-2">Don't miss the report submission deadline</h2>
                    <div className="text-[#262626e2]">
                        <p>
                            Since the journal follows quick review process and shows respect to the editors eagerness,
                            your timely submission of report is highly appreciated.
                        </p>
                    </div>
                </div>


                <div>
                    <h2 className="text-[#0A2258] text-lg font-medium py-2">Communicate your report to the editor</h2>
                    <div className="text-[#262626e2] space-y-3">
                        <p>
                            Once you have completed your evaluation of the article the next step is to write up your report.
                            The report should contain the key elements of your review, addressing the points outlined in the preceding
                            section. Commentary should be courteous and constructive,
                            and should not include any personal remarks or personal details including your name.
                        </p>

                        <p>
                            Providing insight into any deficiencies is important. You should explain and support your
                            judgment so that both editors and authors are able to fully understand the reasoning behind your comments.
                            You should indicate whether your comments are your own opinion or are reflected by the data.
                        </p>

                        <p className="text-[#072159]">
                            When you make a recommendation regarding an article, it is worth considering the
                            categories the editor most likely uses for classifying the article.
                        </p>

                        <div className="px-4">
                            <p> a)  Reject (explain reason in report)</p>
                            <p> b)  Accept without revision</p>
                            <p> c)  Revise (either major or minor)</p>
                        </div>
                        <p>
                            Last, clearly identify what revision is required,
                            and indicate to the editor whether or not you would be happy to review the revised article.
                        </p>
                    </div>
                </div>


                <div>
                    <h2 className="text-[#0A2258] text-lg font-medium py-2">Information for Authors</h2>
                    <div className="text-[#262626e2]">
                        <p>
                            Are you interested in submitting your paper to this journal?
                            It is better if you review the aims and scope, submission policy and author guidelines
                            carefully before submitting your paper. The author (s)
                            should write directly to the executive editor for any query regarding the journal at <span className="text-[#91000D] cursor-pointer hover:text-[#072159] duration-300">editor@aripd.net</span>
                        </p>
                    </div>
                </div>


                <div>
                    <h2 className="text-[#0A2258] text-lg font-medium py-2">Information for Librarians</h2>
                    <div className="text-[#262626e2]">
                        <p>
                            The journal believes that it is librarian who can promote a journal better than anyone else.
                            The journal encourages research librarians to list this journal among their library's electronic
                            journal holdings. As well, it may be worth noting that this journal's open source publishing system
                            is suitable for libraries to host for their faculty members to use with journals they are involved in
                            editing. The librarians can easily collect the published papers from the archive menu of the journal's
                            website. However, subscription order for print copy should be given to the executive editor at <span className="text-[#91000D] cursor-pointer hover:text-[#072159] duration-300">editor@aripd.net</span>
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-[#0A2258] text-lg font-medium py-2">Information for Readers</h2>
                    <div className="text-[#262626e2]">
                        <p>
                            Readers are the heart of American Research Institute for Policy Development,
                            American Association of International Researchers, & Journals.
                            The INSTITUTE emphasizes the readers’ interest and easy access to the contents of the
                            website as well as the published papers in ARIPD & AAIR journals. The journals’
                            contents are posted in the website based on open access policy that greatly benefits
                            both the authors and readers. The readers can easily read and download the contents of
                            published articles from the website. Even there is a specially designed <span className="text-[#91000D] cursor-pointer">‘FAQ’</span> menu for
                            the interested readers and contributors.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Information;