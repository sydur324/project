import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../HomePage/Home/Home";
import JournalsSubjects from "../JournalsPage/JournalsSubjects/JournalsSubjects";
import Accounting from "../Journals/AccountingPage/Accounting/Accounting";
import Agriculture from "../Journals/AgriculturePage/Agriculture/Agriculture";
import Archaeology from "../Journals/ArchaeologyPage/Archaeology/Archaeology";
import Art from "../Journals/ArtPage/Art/Art";
import Bank from "../Journals/BankPage/Bank/Bank";
import Biochemistry from "../Journals/BiochemistryPage/Biochemistry/Biochemistry";
import Business from "../Journals/BusinessPage/Business/Business";
import Chemistry from "../Journals/ChemistryPage/Chemistry/Chemistry";
import AccoutingLayout from "../Layout/AccoutingLayout";
import AccountingHome from "../Journals/AccountingPage/AccountingDetailsPage/AccountingHome/AccountingHome";
import AccountingAimsscop from "../Journals/AccountingPage/AccountingDetailsPage/AccountingAimsscop/AccountingAimsscop";
import AccountingEditorBoard from "../Journals/AccountingPage/AccountingDetailsPage/AccountingEditorBoard/AccountingEditorBoard";
import AccountingSubmision from "../Journals/AccountingPage/AccountingDetailsPage/AccountingSubmision/AccountingSubmision";
import AccountingIndex from "../Journals/AccountingPage/AccountingDetailsPage/AccountingIndex/AccountingIndex";
import AccountingSubscription from "../Journals/AccountingPage/AccountingDetailsPage/AccountingSubscription/AccountingSubscription";
import AccountingResources from "../Journals/AccountingPage/AccountingDetailsPage/AccountingResources/AccountingResources";
import AccountingPolicies from "../Journals/AccountingPage/AccountingDetailsPage/AccountingPolicies/AccountingPolicies";
import AccountingInformation from "../Journals/AccountingPage/AccountingDetailsPage/AccountingInformation/AccountingInformation";
import AccountingUsefullLink from "../Journals/AccountingPage/AccountingDetailsPage/AccountingDetails/AccountingUsefullLink/AccountingUsefullLink";
import AccountingLatextActivity from "../Journals/AccountingPage/AccountingDetailsPage/AccountingLatextActivity/AccountingLatextActivity";
import AccountingContact from "../Journals/AccountingPage/AccountingDetailsPage/AccountingContact/AccountingContact";
import AccountingCurrentIssue from "../Journals/AccountingPage/AccountingDetailsPage/AccountingCurrentIssue/AccountingCurrentIssue";
import AgricultureLayout from "../Layout/AgricultureLayout";
import AgricultureHome from "../Journals/AgriculturePage/AgricultureDetailsPage/AgricultureHome/AgricultureHome";
import AgricultureAimsscop from "../Journals/AgriculturePage/AgricultureDetailsPage/AgricultureAimsscop/AgricultureAimsscop";
import AgricultureSubmision from "../Journals/AgriculturePage/AgricultureDetailsPage/AgricultureSubmision/AgricultureSubmision";
import AgricultureResources from "../Journals/AgriculturePage/AgricultureDetailsPage/AgricultureResources/AgricultureResources";
import ResearchTab from "../ResearchPage/ResearchTab/ResearchTab";
import AgriculturePolicy from "../Journals/AgriculturePage/AgricultureDetailsPage/AgriculturePolicy/AgriculturePolicy";
import AgricultureUseFullLink from "../Journals/AgriculturePage/AgricultureDetailsPage/AgricultureUseFullLink/AgricultureUseFullLink";
import AgricultureActivites from "../Journals/AgriculturePage/AgricultureDetailsPage/AgricultureActivites/AgricultureActivites";
import AgricultureSubscription from "../Journals/AgriculturePage/AgricultureDetailsPage/AgricultureSubscription/AgricultureSubscription";
import AgricultureInformation from "../Journals/AgriculturePage/AgricultureDetailsPage/AgricultureInformation/AgricultureInformation";
import AgricultureIndex from "../Journals/AgriculturePage/AgricultureDetailsPage/AgricultureIndex/AgricultureIndex";
import AgricultureContact from "../Journals/AgriculturePage/AgricultureDetailsPage/AgricultureContact/AgricultureContact";
import ArchaeologyLayout from "../Layout/ArchaeologyLayout";
import ArchaeologyHome from "../Journals/ArchaeologyPage/ArchaeologyDetailsPage/ArchaeologyHome/ArchaeologyHome";
import ArchaeologyAimsscope from "../Journals/ArchaeologyPage/ArchaeologyDetailsPage/ArchaeologyAimsscope/ArchaeologyAimsscope";
import ArchaeologySubmisition from "../Journals/ArchaeologyPage/ArchaeologyDetailsPage/ArchaeologySubmisition/ArchaeologySubmisition";
import ArchaeologyResourch from "../Journals/ArchaeologyPage/ArchaeologyDetailsPage/ArchaeologyResourch/ArchaeologyResourch";
import ArchaeologyPolicy from "../Journals/ArchaeologyPage/ArchaeologyDetailsPage/ArchaeologyPolicy/ArchaeologyPolicy";
import ArchaeologyUseFullLink from "../Journals/ArchaeologyPage/ArchaeologyDetailsPage/ArchaeologyUseFullLink/ArchaeologyUseFullLink";
import ArchaeologyActivites from "../Journals/ArchaeologyPage/ArchaeologyDetailsPage/ArchaeologyActivites/ArchaeologyActivites";
import ArchaeologySubcription from "../Journals/ArchaeologyPage/ArchaeologyDetailsPage/ArchaeologySubcription/ArchaeologySubcription";
import ArchaeologyInformation from "../Journals/ArchaeologyPage/ArchaeologyDetailsPage/ArchaeologyInformation/ArchaeologyInformation";
import ArchaeologyIndex from "../Journals/ArchaeologyPage/ArchaeologyDetailsPage/ArchaeologyIndex/ArchaeologyIndex";
import ArchaeologyContact from "../Journals/ArchaeologyPage/ArchaeologyDetailsPage/ArchaeologyContact/ArchaeologyContact";
import ArtLayout from "../Layout/ArtLayout";
import ArtHome from "../Journals/ArtPage/ArtDetailsPage/ArtHome/ArtHome";
import ArtAimsorScope from "../Journals/ArtPage/ArtDetailsPage/ArtAimsorScope/ArtAimsorScope";
import ArtSubmisition from "../Journals/ArtPage/ArtDetailsPage/ArtSubmisition/ArtSubmisition";
import ArtResources from "../Journals/ArtPage/ArtDetailsPage/ArtResources/ArtResources";
import ArtPolicy from "../Journals/ArtPage/ArtDetailsPage/ArtPolicy/ArtPolicy";
import ArtUseFullLink from "../Journals/ArtPage/ArtDetailsPage/ArtUseFullLink/ArtUseFullLink";
import ArtActivities from "../Journals/ArtPage/ArtDetailsPage/ArtActivities/ArtActivities";
import ArtSubcription from "../Journals/ArtPage/ArtDetailsPage/ArtSubcription/ArtSubcription";
import ArtInformation from "../Journals/ArtPage/ArtDetailsPage/ArtInformation/ArtInformation";
import ArtIndex from "../Journals/ArtPage/ArtDetailsPage/ArtIndex/ArtIndex";
import ArtContact from "../Journals/ArtPage/ArtDetailsPage/ArtContact/ArtContact";
import BankLayout from "../Layout/BankLayout";
import BankHome from "../Journals/BankPage/BankDetailsPage/BankHome/BankHome";
import BankAimorscope from "../Journals/BankPage/BankDetailsPage/BankAimorscope/BankAimorscope";
import BankSubmission from "../Journals/BankPage/BankDetailsPage/BankSubmission/BankSubmission";
import BankResourch from "../Journals/BankPage/BankDetailsPage/BankResourch/BankResourch";
import BankPolicy from "../Journals/BankPage/BankDetailsPage/BankPolicy/BankPolicy";
import BankUseFullLink from "../Journals/BankPage/BankDetailsPage/BankUseFullLink/BankUseFullLink";
import BankActivites from "../Journals/BankPage/BankDetailsPage/BankActivites/BankActivites";
import BankSubscription from "../Journals/BankPage/BankDetailsPage/BankSubscription/BankSubscription";
import BankInformation from "../Journals/BankPage/BankDetailsPage/BankInformation/BankInformation";
import BankIndex from "../Journals/BankPage/BankDetailsPage/BankIndex/BankIndex";
import BankContact from "../Journals/BankPage/BankDetailsPage/BankContact/BankContact";
import BiochemistryLayout from "../Layout/BiochemistryLayout";
import BiochemistHome from "../Journals/BiochemistryPage/BiochemistrDetailsPage/BiochemistHome/BiochemistHome";
import BiochemistiAimorscope from "../Journals/BiochemistryPage/BiochemistrDetailsPage/BiochemistiAimorscope/BiochemistiAimorscope";
import BiochemistiSubmisition from "../Journals/BiochemistryPage/BiochemistiSubmisition/BiochemistiSubmisition";
import BiochemistiResources from "../Journals/BiochemistryPage/BiochemistrDetailsPage/BiochemistiResources/BiochemistiResources";
import BiochemistiPolicy from "../Journals/BiochemistryPage/BiochemistrDetailsPage/BiochemistiPolicy/BiochemistiPolicy";
import BiochemistiLink from "../Journals/BiochemistryPage/BiochemistrDetailsPage/BiochemistiLink/BiochemistiLink";
import BiochemistiActivities from "../Journals/BiochemistryPage/BiochemistrDetailsPage/BiochemistiActivities/BiochemistiActivities";
import BiochemistiSubcription from "../Journals/BiochemistryPage/BiochemistrDetailsPage/BiochemistiSubcription/BiochemistiSubcription";
import BiochemistiInformation from "../Journals/BiochemistryPage/BiochemistrDetailsPage/BiochemistiInformation/BiochemistiInformation";
import BiochemistiIndex from "../Journals/BiochemistryPage/BiochemistrDetailsPage/BiochemistiIndex/BiochemistiIndex";
import BiochemistiContact from "../Journals/BiochemistryPage/BiochemistrDetailsPage/BiochemistiContact/BiochemistiContact";
import AboutWEG from "../AboutWEG/AboutWEG";
import LogIn from "../SignInorSingUpForm/LogIn/LogIn";
import SingUp from "../SignInorSingUpForm/SingUp/SingUp";
import ContactPage from "../ContactPage/ContactPage";

  
 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/researchPage",
            element:<ResearchTab></ResearchTab>
        },
        {
            path:"/aboutWEG",
            element:<AboutWEG></AboutWEG>
        },
        {
            path:"/contact",
            element:<ContactPage></ContactPage>
        },
        {
            path:"/journalsubjects",
            element:<JournalsSubjects></JournalsSubjects>
        },
        {
            path:"/accounting",
            element:<Accounting></Accounting>
        },
        {
            path:"/agriculture",
            element:<Agriculture></Agriculture>
        },
        {
            path:"/archaeology",
            element:<Archaeology></Archaeology>
        },
        {
            path:"/art",
            element:<Art></Art>
        },
        {
            path:"/bank",
            element:<Bank></Bank>
        },
        {
            path:"/biochemistry",
            element:<Biochemistry></Biochemistry>
        },
        {
            path:"/business",
            element:<Business></Business>
        },
        {
            path:"/chemistry",
            element:<Chemistry></Chemistry>
        },


        {
            path:"/accountingPage",
            element:<AccoutingLayout></AccoutingLayout>,
            children:[
                {
                    path:"/accountingPage",
                    element:<AccountingHome></AccountingHome>
                },
                {
                    path:"/accountingPage/currentIssue",
                    element:<AccountingCurrentIssue></AccountingCurrentIssue>
                },
                {
                    path:"/accountingPage/accountingamiscopp",
                    element:<AccountingAimsscop></AccountingAimsscop>
                },
                {
                    path:"/accountingPage/accountinBoard",
                    element:<AccountingEditorBoard></AccountingEditorBoard>
                },
                {
                    path:"/accountingPage/accountinSubmission",
                    element:<AccountingSubmision></AccountingSubmision>
                },
                {
                    path:"/accountingPage/accountingindex",
                    element:<AccountingIndex></AccountingIndex>
                },
                {
                    path:"/accountingPage/accountingSubcription",
                    element:<AccountingSubscription></AccountingSubscription>
                },
                {
                    path:"/accountingPage/accountingResourcess",
                    element:<AccountingResources></AccountingResources>
                },
                {
                    path:"/accountingPage/accountingPlociy",
                    element:<AccountingPolicies></AccountingPolicies>
                },
                {
                    path:"/accountingPage/accountingInformation",
                    element:<AccountingInformation></AccountingInformation>
                },
                {
                    path:"/accountingPage/accountingUsefullLink",
                    element:<AccountingUsefullLink></AccountingUsefullLink>
                },
                {
                    path:"/accountingPage/accountingActivity",
                    element:<AccountingLatextActivity></AccountingLatextActivity>
                },
                {
                    path:"/accountingPage/accountingContact",
                    element:<AccountingContact></AccountingContact>
                }
            ]
        },

        {
            path:"/AgriculturePage",
            element:<AgricultureLayout></AgricultureLayout>,
            children:[
                {
                   path:"/AgriculturePage",
                   element:<AgricultureHome></AgricultureHome>
                },
                {
                   path:"/AgriculturePage/amis&scope",
                   element:<AgricultureAimsscop></AgricultureAimsscop>
                },
                {
                   path:"/AgriculturePage/submission",
                   element:<AgricultureSubmision></AgricultureSubmision>
                },
                {
                   path:"/AgriculturePage/resources",
                   element:<AgricultureResources></AgricultureResources>
                },
                {
                   path:"/AgriculturePage/policy",
                   element:<AgriculturePolicy></AgriculturePolicy>
                },
                {
                   path:"/AgriculturePage/Usefull",
                   element:<AgricultureUseFullLink></AgricultureUseFullLink>
                },
                {
                   path:"/AgriculturePage/activites",
                   element:<AgricultureActivites></AgricultureActivites>
                },
                {
                   path:"/AgriculturePage/subcription",
                   element:<AgricultureSubscription></AgricultureSubscription>
                },
                {
                   path:"/AgriculturePage/Information",
                   element:<AgricultureInformation></AgricultureInformation>
                },
                {
                   path:"/AgriculturePage/Index",
                   element:<AgricultureIndex></AgricultureIndex>
                },
                {
                   path:"/AgriculturePage/Contact",
                   element:<AgricultureContact></AgricultureContact>
                }
            ]
        },


        {
            path:"/ArchaeologyPage",
            element:<ArchaeologyLayout></ArchaeologyLayout>,
            children:[    
                {
                    path:"/ArchaeologyPage",
                    element:<ArchaeologyHome></ArchaeologyHome>
                },
                {
                    path:"/ArchaeologyPage/amis&scorp",
                    element:<ArchaeologyAimsscope></ArchaeologyAimsscope>
                },
                {
                    path:"/ArchaeologyPage/submisition",
                    element:<ArchaeologySubmisition></ArchaeologySubmisition>
                },
                {
                    path:"/ArchaeologyPage/resourch",
                    element:<ArchaeologyResourch></ArchaeologyResourch>
                },
                {
                    path:"/ArchaeologyPage/policy",
                    element:<ArchaeologyPolicy></ArchaeologyPolicy>
                },
                {
                    path:"/ArchaeologyPage/UsefullLink",
                    element:<ArchaeologyUseFullLink></ArchaeologyUseFullLink>
                },
                {
                    path:"/ArchaeologyPage/LatestActivites",
                    element:<ArchaeologyActivites></ArchaeologyActivites>
                },
                {
                    path:"/ArchaeologyPage/Subcription",
                    element:<ArchaeologySubcription></ArchaeologySubcription>
                },
                {
                    path:"/ArchaeologyPage/Information",
                    element:<ArchaeologyInformation></ArchaeologyInformation>
                },
                {
                    path:"/ArchaeologyPage/Index",
                    element:<ArchaeologyIndex></ArchaeologyIndex>
                },
                {
                    path:"/ArchaeologyPage/Contact",
                    element:<ArchaeologyContact></ArchaeologyContact>
                },
            ]
        },

        {
            path:"/ArtPage",
            element:<ArtLayout></ArtLayout>,
            children:[    
                {
                    path:"/ArtPage",
                    element:<ArtHome></ArtHome>
                },
                {
                    path:"/ArtPage/aims&scope",
                    element:<ArtAimsorScope></ArtAimsorScope>
                },
                {
                    path:"/ArtPage/submisition",
                    element:<ArtSubmisition></ArtSubmisition>
                },
                {
                    path:"/ArtPage/resources",
                    element:<ArtResources></ArtResources>
                },
                {
                    path:"/ArtPage/policies",
                    element:<ArtPolicy></ArtPolicy>
                },
                {
                    path:"/ArtPage/useFullLink",
                    element:<ArtUseFullLink></ArtUseFullLink>
                },
                {
                    path:"/ArtPage/activities",
                    element:<ArtActivities></ArtActivities>
                },
                {
                    path:"/ArtPage/subscription",
                    element:<ArtSubcription></ArtSubcription>
                },
                {
                    path:"/ArtPage/information",
                    element:<ArtInformation></ArtInformation>
                },
                {
                    path:"/ArtPage/index",
                    element:<ArtIndex></ArtIndex>
                },
                {
                    path:"/ArtPage/contact",
                    element:<ArtContact></ArtContact>
                },
               
            ]
        },

        {
            path:"/BankPage",
            element:<BankLayout></BankLayout>,
            children:[    
                {
                    path:"/BankPage",
                    element:<BankHome></BankHome>
                },
                {
                    path:"/BankPage/aims&scope",
                    element:<BankAimorscope></BankAimorscope>
                },
                {
                    path:"/BankPage/submisition",
                    element:<BankSubmission></BankSubmission>
                },
                {
                    path:"/BankPage/resources",
                    element:<BankResourch></BankResourch>
                },
                {
                    path:"/BankPage/Policies",
                    element:<BankPolicy></BankPolicy>
                },
                {
                    path:"/BankPage/useFullLink",
                    element:<BankUseFullLink></BankUseFullLink>
                },
                {
                    path:"/BankPage/activities",
                    element:<BankActivites></BankActivites>
                },
                {
                    path:"/BankPage/subscription",
                    element:<BankSubscription></BankSubscription>
                },
                {
                    path:"/BankPage/information",
                    element:<BankInformation></BankInformation>
                },
                {
                    path:"/BankPage/index",
                    element:<BankIndex></BankIndex>
                },
                {
                    path:"/BankPage/contact",
                    element:<BankContact></BankContact>
                },
            ]
        },


        {
            path:"/BiochemistryPage",
            element:<BiochemistryLayout></BiochemistryLayout>,
            children:[    
                {
                    path:"/BiochemistryPage",
                    element:<BiochemistHome></BiochemistHome>
                },
                {
                    path:"/BiochemistryPage/aims&scope",
                    element:<BiochemistiAimorscope></BiochemistiAimorscope>
                },
                {
                    path:"/BiochemistryPage/Submission",
                    element:<BiochemistiSubmisition></BiochemistiSubmisition>
                },
                {
                    path:"/BiochemistryPage/resources",
                    element:<BiochemistiResources></BiochemistiResources>
                },
                {
                    path:"/BiochemistryPage/policies",
                    element:<BiochemistiPolicy></BiochemistiPolicy>
                },
                {
                    path:"/BiochemistryPage/usefullinks",
                    element:<BiochemistiLink></BiochemistiLink>
                },
                {
                    path:"/BiochemistryPage/activities",
                    element:<BiochemistiActivities></BiochemistiActivities>
                },
                {
                    path:"/BiochemistryPage/subscription",
                    element:<BiochemistiSubcription></BiochemistiSubcription>
                },
                {
                    path:"/BiochemistryPage/information",
                    element:<BiochemistiInformation></BiochemistiInformation>
                },
                {
                    path:"/BiochemistryPage/index",
                    element:<BiochemistiIndex></BiochemistiIndex>
                },
                {
                    path:"/BiochemistryPage/contact",
                    element:<BiochemistiContact></BiochemistiContact>
                },
            ]
        }

      ]
    },
    {
        path:"/login",
        element:<LogIn></LogIn>
    },
    {
        path:"/singUp",
        element:<SingUp></SingUp>
    }
  ]);
