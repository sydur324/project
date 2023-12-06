import { Link } from "react-router-dom";

const AccountingNav = () => {
    const accountingNav = [
        { id: 1, name: "Ijatnet Home", to: "/accountingPage" },
        { id: 2, name: "Current Issue", to: "" },
        { id: 3, name: "Aims & Scope", to: "/accountingPage/accountingamiscopp" },
        { id: 4, name: "Editorial Boad", to: "/accountingPage/accountinBoard" },
        { id: 6, name: "Submission", to: "/accountingPage/accountinSubmission" },
        { id: 7, name: "Resources", to: "" },
        { id: 8, name: "Browse Journals", to: "/journalsubjects" },
        { id: 9, name: "Journal Policies", to: "" },
        { id: 10, name: "Useful Links", to: "" },
        { id: 11, name: "Latest Activities", to: "" },
        { id: 12, name: "Subscription", to: "/accountingPage/accountingSubcription" },
        { id: 13, name: "Information", to: "" },
        { id: 13, name: "Index", to: "/accountingPage/accountingindex" },
        { id: 13, name: "Archive", to: "" },
        { id: 14, name: "Contact", to: "" },
    ]
    return (
        <div className="border lg:w-1/3">
            <div className="bg-[#072159] text-[#fff] text-center font-bold text-lg py-6">
                <h2>Journal Menu</h2>
            </div>
            {
                accountingNav.map(nav => <li className="list-none bg-[#0a215805] hover:bg-[#91000D] text-[#0a2158b6] duration-300 hover:text-[#fff] border-b cursor-pointer  px-8 " key={nav.id}>
                    <Link to={nav.to}>
                    <p className="py-3 font-medium ">{nav.name}</p>
                    </Link>
                </li>)
            }
        </div>
    );
};

export default AccountingNav;