const Comment = () => {
    return (
        <div className="w-full my-8">
            <h2 className="text-xl font-bold text-[#072159] aimsscope">Comments to the Journal</h2>

            <div className="my-8">
                <p className="text-[#0D2357]">Your comments & suggestions are valuable to us and inspire us to improve our work systems and research methods.</p>
                <h2 className=" text-[#91000D] font-semibold py-1">Please make your valuable comments by completing the following steps.</h2>

                <div className="bg-[#0d235616] my-6 px-8 py-4">
                    <form className="space-y-3">
                        <div className="flex flex-col space-y-1">
                            <label className="text-sm font-semibold">Your Name <sup className="text-[#8D0012] font-bold">*</sup></label>
                            <input className="px-4 py-2 border border-[#0d235761] outline-none" type="text" placeholder="Name.." />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="text-sm font-semibold">You are a/an  <sup className="text-[#8D0012] font-bold">*</sup></label>
                            <select className="px-4 py-2 border border-[#0d235761] outline-none">
                                <option value="">Select</option>
                                <option value="">Potential Contributor of the journal</option>
                                <option value="">Existing Contributor of the journal</option>
                                <option value="">Reader of the journal</option>
                                <option value="">Editor</option>
                                <option value="">Reviewer</option>
                                <option value="">Independent Researcher</option>
                                <option value="">Well-Wisher of the Institute</option>
                            </select>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="text-sm font-semibold">Your Affiliation <sup className="text-[#8D0012] font-bold">*</sup></label>
                            <input className="px-4 py-2 border border-[#0d235761] outline-none" type="text" placeholder="Exp: Assistant Professor,California State University, USA" />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="text-sm font-semibold">Your e-mail <sup className="text-[#8D0012] font-bold">*</sup></label>
                            <input className="px-4 py-2 border border-[#0d235761] outline-none" type="email" placeholder="Enter Email..." />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="text-sm font-semibold">Select Journal  <sup className="text-[#8D0012] font-bold">*</sup></label>
                            <select className="px-4 py-2 border border-[#0d235761] outline-none">
                                <option value="International Journal of Accounting and Taxation">Select</option>
                                <option value="International Journal of Accounting and Taxation">International Journal of Accounting and Taxation</option>
                                <option value="Journal of Agriculture and Environmental Sciences">Journal of Agriculture and Environmental Sciences</option>
                                <option value="Journal of Anthropology and Archaeology">Journal of Anthropology and Archaeology</option>
                                <option value="International Journal of Art and Art History">International Journal of Art and Art History</option>
                                <option value="Journal of Finance and Bank Management">Journal of Finance and Bank Management</option>
                                <option value="Journal of Chemistry and Biochemistry">Journal of Chemistry and Biochemistry</option>
                                <option value="Journal of Business Law and Ethics">Journal of Business Law and Ethics</option>
                                <option value="Journal of Chemistry and Biochemistry">Journal of Chemistry and Biochemistry</option>
                                <option value="Journal of Computer Science and Information Technology">Journal of Computer Science and Information Technology</option>
                                <option value="Journal of Law and Criminal Justice">Journal of Law and Criminal Justice</option>
                                <option value="Journal of Economics and Development Studies">Journal of Economics and Development Studies</option>
                                <option value="Journal of Geography and Earth Sciences">Journal of Geography and Earth Sciences</option>
                                <option value="Journal of Economics and Development Studies">Journal of Economics and Development Studies</option>
                                <option value="Journal of Small Business and Entrepreneurship Development">Journal of Small Business and Entrepreneurship Development</option>
                                <option value="Journal of Finance and Bank Management">Journal of Finance and Bank Management</option>
                                <option value="Journal of International Relations & Foreign Policy">Journal of International Relations & Foreign Policy</option>
                                <option value="Journal of Geography and Earth Sciences">Journal of Geography and Earth Sciences</option>
                                <option value="Journal of Human Resources Management and Labor Studies">Journal of Human Resources Management and Labor Studies</option>
                                <option value="Review of History and Political Science">Review of History and Political Science</option>
                                <option value="Journal of Social Welfare and Human Rights">Journal of Social Welfare and Human Rights</option>
                                <option value="Journal of Computer Science and Information Technology">Journal of Computer Science and Information Technology</option>
                                <option value="Journal of International Relations & Foreign Policy">Journal of International Relations & Foreign Policy</option>
                                <option value="Journal of Islamic Studies and Culture">Journal of Islamic Studies and Culture</option>
                                <option value="Journal of Human Resources Management and Labor Studies">Journal of Human Resources Management and Labor Studies</option>
                                <option value="Journal of Law and Criminal Justice">Journal of Law and Criminal Justice</option>
                                <option value="International Journal of Linguistics & Communication">International Journal of Linguistics & Communication</option>
                                <option value="Journal of Management Policies and Practices">Journal of Management Policies and Practices</option>
                                <option value="Journal of Marketing Management">Journal of Marketing Management</option>
                                <option value="International Journal of Medicine and Pharmacy">International Journal of Medicine and Pharmacy</option>
                                <option value="International Journal of Music and Performing Arts">International Journal of Music and Performing Arts</option>
                                <option value="International Journal of Nursing">International Journal of Nursing</option>
                                <option value="International Journal of Music and Performing Arts">International Journal of Music and Performing Arts</option>
                                <option value="Journal of Physical Education and Sports Management">Journal of Physical Education and Sports Management</option>
                                <option value="Journal of Administrative Sciences and Policy Studies">Journal of Administrative Sciences and Policy Studies</option>
                                <option value="Journal of Power, Politics & Governance">Journal of Power, Politics & Governance</option>
                                <option value="Public Policy and Administration Review">Public Policy and Administration Review</option>
                                <option value="Journal of Small Business and Entrepreneurship Development">Journal of Small Business and Entrepreneurship Development</option>
                                <option value="Journal of Social Welfare and Human Rights">Journal of Social Welfare and Human Rights</option>
                                <option value="Journal of Sociology and Social Work">Journal of Sociology and Social Work</option>
                                <option value="American Review of Mathematics and Statistics">American Review of Mathematics and Statistics</option>
                                <option value="International Journal of Accounting and Taxation">International Journal of Accounting and Taxation</option>
                                <option value="Journal of Tourism and Hospitality Management">Journal of Tourism and Hospitality Management</option>
                                <option value="Journal of Administrative Sciences and Policy Studies">Journal of Administrative Sciences and Policy Studies</option>
                                <option value="Journal of Anthropology and Archaeology">Journal of Anthropology and Archaeology</option>
                                <option value="Journal of Engineering and Architecture">Journal of Engineering and Architecture</option>
                                <option value="International Journal of Physics and Astronomy">International Journal of Physics and Astronomy</option>
                                <option value="Journal of Psychology & Behavioral Science">Journal of Psychology & Behavioral Science</option>
                                <option value="American International Journal of Biology">American International Journal of Biology</option>
                                <option value="Journal of Business Law and Ethics">Journal of Business Law and Ethics</option>
                                <option value="International Journal of Linguistics & Communication">International Journal of Linguistics & Communication</option>
                                <option value="Review of Contemporary Business Research">Review of Contemporary Business Research</option>
                                <option value="Journal of Foreign Languages, Cultures & Civilizations">Journal of Foreign Languages, Cultures & Civilizations</option>
                                <option value="Journal of Management Information System & E-commerce">Journal of Management Information System & E-commerce</option>
                                <option value="Journal of Economics and Development Studies">Journal of Economics and Development Studies</option>
                                <option value="Journal of Engineering and Architecture">Journal of Engineering and Architecture</option>
                                <option value="Journal of Agriculture and Environmental Sciences">Journal of Agriculture and Environmental Sciences</option>
                                <option value="Journal of Foreign Languages, Cultures & Civilizations">Journal of Foreign Languages, Cultures & Civilizations</option>
                                <option value="International Journal of Gender & Women's Studies">International Journal of Gender & Women's Studies</option>
                                <option value="Journal of Power, Politics & Governance">Journal of Power, Politics & Governance</option>
                                <option value="International Journal of Health Sciences">International Journal of Health Sciences</option>
                                <option value="Journal of Economics and Development Studies">Journal of Economics and Development Studies</option>
                                <option value="Review of Arts and Humanities">Review of Arts and Humanities</option>
                                <option value="Journal of International Business and Economics">Journal of International Business and Economics</option>
                                <option value="Journal of Islamic Banking and Finance">Journal of Islamic Banking and Finance</option>
                                <option value="Review of Journalism & Mass Communication">Review of Journalism & Mass Communication</option>
                                <option value="International Journal of Language & Literature">International Journal of Language & Literature</option>
                                <option value="Journal of Library and Information Sciences">Journal of Library and Information Sciences</option>
                                <option value="International Journal of Language & Literature">International Journal of Language & Literature</option>
                                <option value="Journal of Management Information System & E-commerce">Journal of Management Information System & E-commerce</option>
                                <option value="American Review of Mathematics and Statistics">American Review of Mathematics and Statistics</option>
                                <option value="International Multilingual Journal of Contemporary Research">International Multilingual Journal of Contemporary Research</option>
                                <option value="Journal of Natural Sciences">Journal of Natural Sciences</option>
                                <option value="Journal of Global Peace and Conflict">Journal of Global Peace and Conflict</option>
                                <option value="Journal of Philosophy and Theology">Journal of Philosophy and Theology</option>
                                <option value="International Journal of Physics and Astronomy">International Journal of Physics and Astronomy</option>
                                <option value="Review of History and Political Science">Review of History and Political Science</option>
                                <option value="Journal of Psychology & Behavioral Science">Journal of Psychology & Behavioral Science</option>
                                <option value="Public Policy and Administration Review">Public Policy and Administration Review</option>
                                <option value="Journal of Social Science for Policy Implications">Journal of Social Science for Policy Implications</option>
                                <option value="Journal of Sociology and Social Work">Journal of Sociology and Social Work</option>
                                <option value="Journal of Physical Education and Sports Management">Journal of Physical Education and Sports Management</option>
                                <option value="Strategic Management Quarterly">Strategic Management Quarterly</option>
                                <option value="Journal of Philosophy and Theology">Journal of Philosophy and Theology</option>
                                <option value="International Journal of Gender & Women's Studies">International Journal of Gender & Women's Studies</option>
                            </select>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="text-sm font-semibold">Your Comments <sup className="text-[#8D0012] font-bold">*</sup></label>
                            <textarea className="px-4 py-2 border border-[#0d235761] outline-none" cols="30" rows="4" placeholder="Write Your Comment..."></textarea>
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

export default Comment;