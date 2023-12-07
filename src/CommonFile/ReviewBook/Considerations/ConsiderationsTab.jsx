import { useState } from "react";

const ConsiderationsTab = () => {
    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }
    return (
        <div>
            <div className='flex items-center  cursor-pointer text-sm font-medium'>
                <button
                    onClick={() => toggleTab(1)}
                    className={toggle === 1 ? "tab active-tabs px-2 py-2 bg-[#072159] text-[#fff]" : "px-2 py-2 border tab"}

                >Character</button>

                <button
                    onClick={() => toggleTab(2)}
                    className={toggle === 2 ? "tab active-tabs px-2 py-2 bg-[#072159] text-[#fff]" : "px-2 py-2 border tab"}>Theme</button>

                <button
                    onClick={() => toggleTab(3)}
                    className={toggle === 3 ? "tab active-tabs px-2 py-2 bg-[#072159] text-[#fff]" : "px-2 py-2 border tab"}
                >Plot</button>

                <button
                    onClick={() => toggleTab(4)}
                    className={toggle === 4 ? "tab active-tabs px-2 py-2 bg-[#072159] text-[#fff]" : "px-2 py-2 border tab"}
                >Style</button>

                <button
                    onClick={() => toggleTab(5)}
                    className={toggle === 5 ? "tab active-tabs px-2 py-2 bg-[#072159] text-[#fff]" : "px-2 py-2 border tab"}
                >Setting</button>

                <button
                    onClick={() => toggleTab(6)}
                    className={toggle === 6 ? "tab active-tabs px-2 py-2 bg-[#072159] text-[#fff]" : "px-2 py-2 border tab"}
                >Biography</button>

                <button
                    onClick={() => toggleTab(7)}
                    className={toggle === 7 ? "tab active-tabs px-2 py-2 bg-[#072159] text-[#fff]" : "px-2 py-2 border tab"}
                >History </button>

                <button
                    onClick={() => toggleTab(8)}
                    className={toggle === 8 ? "tab active-tabs px-2 py-2 bg-[#072159] text-[#fff]" : "px-2 py-2 border tab"}
                >Poetry</button>

            </div>

            <div className="">
                <div className={toggle === 1 ? "content active-content" : "content"}>
                    <div className="my-4 border px-4 py-4">
                        <h2 className="  font-medium text-[#91000D] aimsscope">Character</h2>
                        <div className="my-6 space-y-2 px-6 text-[#262626eb]">
                            <p>1 . From what sources are the characters drawn?</p>
                            <p>2 . What is the author's attitude toward his characters?</p>
                            <p>3 . Are the characters flat or three-dimensional?</p>
                            <p>4 . Does character development occur?</p>
                            <p>5 . Is character delineation direct or indirect?</p>
                        </div>
                    </div>
                </div>
                <div className={toggle === 2 ? "content active-content" : "content"}>
                    <div className="my-4 border px-4 py-4">
                        <h2 className="  font-medium text-[#91000D] aimsscope">Theme</h2>
                        <div className="my-6 space-y-2 px-6 text-[#262626eb]">
                            <p>1 . What is/are the major theme(s)?</p>
                            <p>2 . How are they revealed and developed?</p>
                            <p>3 . Is the theme traditional and familiar, or new and original?</p>
                            <p>4 . Is the theme didactic, psychological, social, entertaining, escapist, etc. in purpose or intent?</p>

                        </div>
                    </div>
                </div>
                <div className={toggle === 3 ? "content active-content" : "content"}>
                    <div className="my-4 border px-4 py-4">
                        <h2 className="  font-medium text-[#91000D] aimsscope">Plot</h2>
                        <div className="my-6 space-y-2 px-6 text-[#262626eb]">
                            <p>1 . How are the various elements of plot (eg, introduction, suspense, climax, conclusion) handled?</p>
                            <p>2 . What is the relationship of plot to character delineation?</p>
                            <p>3 . To what extent, and how, is accident employed as a complicating and/or resolving force?</p>
                            <p>4 . What are the elements of mystery and suspense?</p>
                            <p>5 . What other devices of plot complication and resolution are employed?</p>
                            <p>6 . Is there a sub-plot and how is it related to the main plot?</p>
                            <p>7 . Is the plot primary or secondary to some of the other essential elements of the story (character, setting, style, etc.)?</p>
                        </div>
                    </div>
                </div>
                <div className={toggle === 4 ? "content active-content" : "content"}>
                    <div className="my-4 border px-4 py-4">
                        <h2 className="  font-medium text-[#91000D] aimsscope">Style</h2>
                        <div className="my-6 space-y-2 px-6 text-[#262626eb]">
                            <p>1 . What are the "intellectual qualities" of the writing (e.g., simplicity, clarity)?</p>
                            <p>2 . What are the "emotional qualities" of the writing (e.g., humour, wit, satire)?</p>
                            <p>3 . What are the "aesthetic qualities" of the writing (e.g., harmony, rhythm)?</p>
                            <p>4 . What stylistic devices are employed (e.g., symbolism, motifs, parody, allegory)?</p>
                            <p>5 . How effective is dialogue?</p>
                        </div>
                    </div>
                </div>
                <div className={toggle === 5 ? "content active-content" : "content"}>
                    <div className="my-4 border px-4 py-4">
                        <h2 className="  font-medium text-[#91000D] aimsscope">Setting</h2>
                        <div className="my-6 space-y-2 px-6 text-[#262626eb]">
                            <p>1 . What is the setting and does it play a significant role in the work?</p>
                            <p>2 . Is a sense of atmosphere evoked, and how?</p>
                            <p>3 . What scenic effects are used and how important and effective are they?</p>
                            <p>4 . Does the setting influence or impinge on the characters and/or plot?</p>

                        </div>
                    </div>
                </div>
                <div className={toggle === 6 ? "content active-content" : "content"}>
                    <div className="my-4 border px-4 py-4">
                        <h2 className="  font-medium text-[#91000D] aimsscope">Biography</h2>
                        <div className="my-6 space-y-2 px-6 text-[#262626eb]">
                            <p>1 . Does the book give a "full-length" picture of the subject?</p>
                            <p>2 . What phases of the subject's life receive greatest treatment and is this treatment justified?</p>
                            <p>3 . What is the point of view of the author?</p>
                            <p>4 . How is the subject matter organized: chronologically, retrospectively, etc.?</p>
                            <p>5 . Is the treatment superficial or does the author show extensive study into the subject's life?</p>
                            <p>6 . What source materials were used in the preparation of the biography?</p>
                            <p>8 . Is the work documented?</p>
                            <p>9 . Does the author attempt to get at the subject's hidden motives?</p>
                            <p>10 . What is the relationship of the subject's career to contemporary history?</p>
                            <p>11 . How does the biography compare with others about the same person?</p>
                            <p>12 . How does it compare with other works by the same author?</p>

                        </div>
                    </div>
                </div>
                <div className={toggle === 7 ? "content active-content" : "content"}>
                    <div className="my-4 border px-4 py-4">
                        <h2 className="  font-medium text-[#91000D] aimsscope">History and other Nonfiction</h2>
                        <div className="my-6 space-y-2 px-6 text-[#262626eb]">
                            <p>1 . with what particular subject or period does the book deal?</p>
                            <p>2 . How thorough is the treatment?</p>
                            <p>3 . What were the sources used?</p>
                            <p>4 . Is the account given in broad outline or in detail?</p>
                            <p>5 . Is the style that of reportorial writing, or is there an effort at interpretive writing?</p>
                            <p>6 . What is the point of view or thesis of the author?</p>
                            <p>8 . is the treatment superficial or profound?</p>
                            <p>9 . For what group is the book intended (textbook, popular, scholarly, etc.)?</p>
                            <p>10 . 1Are maps, illustrations, charts, etc. used and how are these to be evaluated?</p>
                            <p>11 . Is social history or political history emphasized?</p>
                            <p>12 . Are dates used extensively, and if so, are they used intelligently?</p>
                            <p>13 . Is the book a revision? How does it compare with earlier editions</p>

                        </div>
                    </div>
                </div>
                <div className={toggle === 8 ? "content active-content" : "content"}>
                    <div className="my-4 border px-4 py-4">
                        <h2 className="  font-medium text-[#91000D] aimsscope">Poetry</h2>
                        <div className="my-6 space-y-2 px-6 text-[#262626eb]">
                            <p>1 . Is this a work of power, originality, and individuality?</p>
                            <p>2 . What kind of poetry is under review (epic, lyrical, elegiac, etc.)?</p>
                            <p>3 . What poetical devices have been used (rhyme, rhythm, figures of speech, imagery, etc.), and to what effect?</p>
                            <p>4 . What is the central concern of the poem and is it effectively expressed?</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsiderationsTab;