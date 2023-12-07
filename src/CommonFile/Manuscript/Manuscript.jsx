const Manuscript = () => {
    return (
        <div className="my-8">
            <h2 className=" text-lg font-bold text-[#0D2357] aimsscope">Manuscript Preparation Guidelines</h2>
            <div className="my-8">
                <div className="space-y-3">
                    <div className="space-y-1">
                        <h2 className="font-semibold text-[#8D0012]">1 :  Language</h2>
                        <p className="text-[#262626e2]">
                            The language of the manuscript must be English
                            (either American or British standard, but not the mixture of both).
                        </p>
                    </div>

                    <div className="space-y-1">
                        <h2 className="font-semibold text-[#8D0012]">2 :  Length of paper</h2>
                        <p className="text-[#262626e2]">
                            The length of the paper should not exceed 30 pages (Times New Roman, 12 Font) excluding tables,
                            figures, references and appendices (if any). Paper containing more than
                            30 pages will be returned to the author(s) to abridge. Articles should be typed in
                            double-space (including footnotes and references) on one side of the paper only (preferably A4)
                            with wide margins.
                            Authors are urged to write as concisely as possible, but not at the expense of clarity.
                        </p>
                    </div>


                    <div className="space-y-1">
                        <h2 className="font-semibold text-[#8D0012]">3 :  Title Page</h2>
                        <div>
                            <h2 className="font-medium text-[#072159]">The title page should include:</h2>
                            <div className="space-y-1 py-2 font-medium text-[#262626e2]">
                                <p>(i)  The name(s) of the author(s) </p>
                                <p>(ii)  A concise and informative title</p>
                                <p>(iii) The affiliation(s) and address (es) of the author(s)</p>
                                <p>(iv)  The e-mail address, telephone and fax numbers of the corresponding author</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <h2 className="font-semibold text-[#8D0012]">4 :  Abstrac</h2>
                        <p className="text-[#262626e2]">
                            Please provide an abstract of 150 to 200 words.
                            The abstract should not contain any undefined abbreviations or unspecified references.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <h2 className="font-semibold text-[#8D0012]">5 :  Keywords</h2>
                        <p className="text-[#262626e2]">
                            Please provide 4 to 6 keywords which can be used for indexing purposes.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <h2 className="font-semibold text-[#8D0012]">6 :  Acknowledgement</h2>
                        <p className="text-[#262626e2]">
                            The author may use acknowledgement section in the title page of the paper (if any).
                        </p>
                    </div>

                    <div className="space-y-1">
                        <h2 className="font-semibold text-[#8D0012]">7 :  Subdivision of the article</h2>
                        <p className="text-[#262626e2]">
                            Divide your article into clearly defined and numbered sections.
                            Subsections should be numbered 1, 2. (then 1.1, 1.1.1, 1.1.2), 1.2, etc.
                            The abstract is not included in section numbering.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <h2 className="font-semibold text-[#8D0012]">8 :  Table and Figures</h2>
                        <p className="text-[#262626e2]">
                            Present tables and figures within the article, not at the end of the article.
                            Please note that the article will be published in black and white (print),
                            although online version will contain the colorful figures (if any). However,
                            the color print will be available in extreme cases as per the request of the author.
                        </p>
                    </div>

                    <div className="space-y-1">
                        <h2 className="font-semibold text-[#8D0012]">9 :  References</h2>
                        <p className="text-[#262626e2]">
                            Author(s) should follow the latest edition of APA style in referencing.
                            Please visit www.apastyle.org to learn more about APA style
                        </p>
                    </div>

                    <div className="space-y-1">
                        <h2 className="font-semibold text-[#8D0012]">10 :  Citations in the text</h2>
                        <p className="text-[#262626e2]">
                            Please ensure that every reference cited in the text is also present in the reference
                            list (and vice versa). Avoid citation in the abstract. Unpublished results and personal
                            communications should not be in the reference list, but may be mentioned in the text. Citation of a
                            reference as 'in press' implies that the item has been accepted for publication.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Manuscript;