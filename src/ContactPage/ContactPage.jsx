import Contact from "../CommonFile/Contact/Contact";

const ContactPage = () => {
    return (
        <div className="my-36 xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Contact Us</h2>
            <div className="my-8 space-y-2">
                <p className="text-[#0A2258]">
                    To submit your paper and for any query, complete this form to
                    contact with the executive editor.
                </p>
                <p>
                    <span className="text-[#91000D]">'*'</span> indicates mandatory fields.
                </p>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default ContactPage;