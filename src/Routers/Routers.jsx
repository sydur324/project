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
                }
            ]
        }

      ]
    },
  ]);
