import { Link } from "react-router-dom";

const BankNav = () => {
    const bankNav = [
        { id: 1, name: "Ijatnet Home", to: "/BankPage" },
        { id: 2, name: "Current Issue", to: "" },
        { id: 3, name: "Aims & Scope", to: "/BankPage/aims&scope" },
        { id: 4, name: "Editorial Boad", to: "" },
        { id: 6, name: "Submission", to: "/BankPage/submisition" },
        { id: 7, name: "Resources", to: "/BankPage/resources" },
        { id: 8, name: "Browse Journals", to: "/journalsubjects" },
        { id: 9, name: "Journal Policies", to: "/BankPage/Policies" },
        { id: 10, name: "Useful Links", to: "/BankPage/useFullLink" },
        { id: 11, name: "Latest Activities", to: "/BankPage/activities" },
        { id: 12, name: "Subscription", to: "/BankPage/subscription" },
        { id: 13, name: "Information", to: "/BankPage/information" },
        { id: 13, name: "Index", to: "/BankPage/index" },
        { id: 13, name: "Archive", to: "" },
        { id: 14, name: "Contact", to: "/BankPage/contact" },
    ]
    return (
        <div className="border lg:w-1/3">
            <div className="bg-[#072159] text-[#fff] text-center font-bold text-lg py-6">
                <h2>Journal Menu</h2>
            </div>
            {
                bankNav.map(nav => <li className="list-none bg-[#0a215805] hover:bg-[#91000D] text-[#0a2158b6] duration-300 hover:text-[#fff] border-b cursor-pointer  px-8 " key={nav.id}>
                    <Link to={nav.to}>
                    <p className="py-3 font-medium ">{nav.name}</p>
                    </Link>
                </li>)
            }
        </div>
    );
};

export default BankNav;