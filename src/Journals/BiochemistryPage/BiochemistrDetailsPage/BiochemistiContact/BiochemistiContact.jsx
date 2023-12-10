import Contact from "../../../../CommonFile/Contact/Contact";



const BiochemistiContact = () => {
    return (
        <div className="w-full">
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

export default BiochemistiContact;