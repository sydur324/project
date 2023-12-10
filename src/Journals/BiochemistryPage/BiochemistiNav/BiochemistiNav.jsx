import { Link } from "react-router-dom";

const BiochemistiNav = () => {
    const biochemistiNav = [
        { id: 1, name: "Ijatnet Home", to: "/BiochemistryPage" },
        { id: 2, name: "Current Issue", to: "" },
        { id: 3, name: "Aims & Scope", to: "/BiochemistryPage/aims&scope" },
        { id: 4, name: "Editorial Boad", to: "" },
        { id: 6, name: "Submission", to: "/BiochemistryPage/Submission" },
        { id: 7, name: "Resources", to: "/BiochemistryPage/resources" },
        { id: 8, name: "Browse Journals", to: "/journalsubjects" },
        { id: 9, name: "Journal Policies", to: "/BiochemistryPage/policies" },
        { id: 10, name: "Useful Links", to: "/BiochemistryPage/usefullinks" },
        { id: 11, name: "Latest Activities", to: "/BiochemistryPage/activities" },
        { id: 12, name: "Subscription", to: "/BiochemistryPage/subscription" },
        { id: 13, name: "Information", to: "/BiochemistryPage/information" },
        { id: 13, name: "Index", to: "/BiochemistryPage/index" },
        { id: 13, name: "Archive", to: "" },
        { id: 14, name: "Contact", to: "/BiochemistryPage/contact" },
    ]
    return (
        <div className="border lg:w-1/3">
            <div className="bg-[#072159] text-[#fff] text-center font-bold text-lg py-6">
                <h2>Journal Menu</h2>
            </div>
            {
                biochemistiNav.map(nav => <li className="list-none bg-[#0a215805] hover:bg-[#91000D] text-[#0a2158b6] duration-300 hover:text-[#fff] border-b cursor-pointer  px-8 " key={nav.id}>
                    <Link to={nav.to}>
                    <p className="py-3 font-medium ">{nav.name}</p>
                    </Link>
                </li>)
            }
        </div>
    );
};

export default BiochemistiNav;