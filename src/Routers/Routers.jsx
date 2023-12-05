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
import AccountingDetails from "../Journals/AccountingPage/AccountingDetailsPage/AccountingDetails/AccountingDetails";
import AccoutingLayout from "../Layout/AccoutingLayout";
import AccountingHome from "../Journals/AccountingPage/AccountingDetailsPage/AccountingHome/AccountingHome";
import AccountingAimsscop from "../Journals/AccountingPage/AccountingDetailsPage/AccountingAimsscop/AccountingAimsscop";
import AccountingEditorBoard from "../Journals/AccountingPage/AccountingDetailsPage/AccountingEditorBoard/AccountingEditorBoard";

  
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
                    path:"/accountingPage/accountingamiscopp",
                    element:<AccountingAimsscop></AccountingAimsscop>
                },
                {
                    path:"/accountingPage/accountinBoard",
                    element:<AccountingEditorBoard></AccountingEditorBoard>
                }
            ]
        }

      ]
    },
  ]);
